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

  it('should call getPhotos onInit', () => {
    const getPhotosSpy = spyOn(component, 'getPhotos');
    
    component.ngOnInit();
    expect(getPhotosSpy).toHaveBeenCalledOnceWith();
  });

  it('should update filters page and call getPhotos with page 1', () => {
    component['getPhotos'](true);

    expect(component['filters']().page).toBe(1);
    expect(photosService.getPhotos).toHaveBeenCalledWith({ page: 1, limit: 9 });
  });

  it('should set photoList on getPhotos', () => {
    expect(component.photoList().length).toBe(MOCK_PHOTOS.length);
  });

  it('should render a photo card for each photo', () => {
    const cards = fixture.nativeElement.querySelectorAll('app-photo-card');
    expect(cards.length).toBe(MOCK_PHOTOS.length);
  });

  it('should call getPhotos with isPaginated on scrolled event', () => {
    const directiveEl = fixture.debugElement.query(By.directive(InfiniteScrollDirective));
    directiveEl.triggerEventHandler('scrolled', null);

    expect(photosService.getPhotos).toHaveBeenCalledWith({ page: 1, limit: 9 });
    expect(component.photoList().length).toBe(18);
  });
});
