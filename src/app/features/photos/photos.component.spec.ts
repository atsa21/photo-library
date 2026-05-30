import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { PhotosComponent } from './photos.component';
import { InfiniteScrollDirective } from '@shared/directives/infinite-scroll.directive';
import { PhotosService } from '@core/services/photos.service';
import { FavoritesService } from '@core/services/favorites.service';
import { MOCK_PHOTOS } from '@core/mocks';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;
  let photosService: jasmine.SpyObj<PhotosService>;
  let favoritesService: jasmine.SpyObj<FavoritesService>;

  beforeEach(async () => {
    const photosServiceSpy = jasmine.createSpyObj<PhotosService>('PhotosService', ['getPhotos']);
    photosServiceSpy.getPhotos.and.returnValue(of(MOCK_PHOTOS));

    const favoritesServiceSpy = jasmine.createSpyObj<FavoritesService>('FavoritesService', ['addFavorite']);

    await TestBed.configureTestingModule({
      imports: [PhotosComponent],
      providers: [
        { provide: PhotosService, useValue: photosServiceSpy },
        { provide: FavoritesService, useValue: favoritesServiceSpy },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();

    photosService = TestBed.inject(PhotosService) as jasmine.SpyObj<PhotosService>;
    favoritesService = TestBed.inject(FavoritesService) as jasmine.SpyObj<FavoritesService>;
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPhotos onInit and set photosList', () => {
    const getPhotosSpy = spyOn(component as any, 'getPhotos');
    
    component.ngOnInit();
    expect(getPhotosSpy).toHaveBeenCalledOnceWith();
    expect(component.photoList().length).toBe(MOCK_PHOTOS.length);
  });

  it('should render a photo card for each photo', () => {
    const cards = fixture.nativeElement.querySelectorAll('app-photo-card');
    expect(cards.length).toBe(MOCK_PHOTOS.length);
  });

  it('should show load spinner on isPaginateLoading true', () => {
    component.isPaginateLoading.set(true);
    const spinner = fixture.nativeElement.querySelector('app-loader');
    expect(spinner).toBeDefined();
  });

  describe('paginatePhotos', () => {
    let getPhotosSpy: jasmine.Spy;

    beforeEach(() => {
      getPhotosSpy = spyOn(component as unknown as { getPhotos: (isPaginated?: boolean) => void }, 'getPhotos');
    });

    it('should call paginatedPhotos with isPaginated on scrolled event', () => {
      const directiveEl = fixture.debugElement.query(By.directive(InfiniteScrollDirective));
      directiveEl.triggerEventHandler('scrolled', null);

      expect(getPhotosSpy).toHaveBeenCalledOnceWith(true);
    });

    it('should set isPaginateLoading to true and call getPhotos with isPaginated', () => {
      component.paginatePhotos();

      expect(component.isPaginateLoading()).toBeTrue();
      expect(getPhotosSpy).toHaveBeenCalledOnceWith(true);
    });

    it('should append photos and reset isPaginateLoading after pagination completes', () => {
      getPhotosSpy.and.callThrough();
      component.paginatePhotos();

      expect(component.photoList().length).toBe(MOCK_PHOTOS.length * 2);
      expect(component.isPaginateLoading()).toBeFalse();
    });

    it('should not call getPhotos when isLoading is true', () => {
      component.isLoading.set(true);
      component.paginatePhotos();

      expect(getPhotosSpy).not.toHaveBeenCalled();
    });
  });

  describe('getPhotos', () => {
    it('should call getPhotos with page 1', () => {
      component['getPhotos']();

      expect(component['filters']().page).toBe(1);
      expect(photosService.getPhotos).toHaveBeenCalledWith({ page: 1, limit: 9 });
      expect(component.photoList().length).toBe(MOCK_PHOTOS.length);
    });

    it('should update filters page and call getPhotos with page 2', () => {
      component['getPhotos'](true);

      expect(component['filters']().page).toBe(2);
      expect(photosService.getPhotos).toHaveBeenCalledWith({ page: 2, limit: 9 });
      expect(component.photoList().length).toBe(MOCK_PHOTOS.length * 2);
    });
  });

  describe('makeFavorite', () => {
    it('should call favoritesService.addFavorite', () => {
      component.makeFavorite(MOCK_PHOTOS[0]);

      expect(favoritesService.addFavorite).toHaveBeenCalledOnceWith(MOCK_PHOTOS[0]);
    });
  });
});
