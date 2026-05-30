import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { PhotosComponent } from './photos.component';
import { InfiniteScrollDirective } from '@shared/directives/infinite-scroll.directive';
import { PhotosService } from '@core/services/photos.service';
import { PhotoModel } from '@core/models';

const MOCK_PHOTOS: PhotoModel[] = [
  { id: '0', url: 'test0.jpg', thumbUrl: 'test0.jpg' },
  { id: '1', url: 'test1.jpg', thumbUrl: 'test1.jpg' },
  { id: '2', url: 'test2.jpg', thumbUrl: 'test2.jpg' },
  { id: '3', url: 'test3.jpg', thumbUrl: 'test3.jpg' },
  { id: '4', url: 'test4.jpg', thumbUrl: 'test4.jpg' },
  { id: '5', url: 'test5.jpg', thumbUrl: 'test5.jpg' },
  { id: '6', url: 'test6.jpg', thumbUrl: 'test6.jpg' },
  { id: '7', url: 'test7.jpg', thumbUrl: 'test7.jpg' },
  { id: '8', url: 'test8.jpg', thumbUrl: 'test8.jpg' },
];

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;
  let photosService: jasmine.SpyObj<PhotosService>;

  beforeEach(async () => {
    const photosServiceSpy = jasmine.createSpyObj<PhotosService>('PhotosService', ['getPhotos']);
    photosServiceSpy.getPhotos.and.returnValue(of(MOCK_PHOTOS));

    await TestBed.configureTestingModule({
      imports: [PhotosComponent],
      providers: [{ provide: PhotosService, useValue: photosServiceSpy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();

    photosService = TestBed.inject(PhotosService) as jasmine.SpyObj<PhotosService>;
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
  });

  describe('getPhotos', () => {
    it('should call getPhotos with page 0', () => {
      component['getPhotos']();

      expect(component['filters']().page).toBe(0);
      expect(photosService.getPhotos).toHaveBeenCalledWith({ page: 0, limit: 9 });
      expect(component.photoList().length).toBe(MOCK_PHOTOS.length);
    });

    it('should update filters page and call getPhotos with page 1', () => {
      component['getPhotos'](true);

      expect(component['filters']().page).toBe(1);
      expect(photosService.getPhotos).toHaveBeenCalledWith({ page: 1, limit: 9 });
      expect(component.photoList().length).toBe(MOCK_PHOTOS.length * 2);
    });
  });
});
