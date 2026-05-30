import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PhotosService } from './photos.service';
import { PhotoModel } from '@core/models';

describe('PhotosService', () => {
  let service: PhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate photos with url and thumbUrl', fakeAsync(() => {
    let results: PhotoModel[] = [];
    service.getPhotos({ page: 0, limit: 9 }).subscribe(photos => (results = photos));
    tick(400);
    results.forEach(photo => {
      expect(photo.url).toBeDefined();
      expect(photo.thumbUrl).toBeDefined();
    });
  }));

  it('should return requested number of photos', fakeAsync(() => {
    let results: PhotoModel[] = [];
    service.getPhotos({ page: 0, limit: 9 }).subscribe(photos => (results = photos));
    tick(400);
    expect(results.length).toBe(9);
  }));

  it('should generate photos with correct id format for given page', fakeAsync(() => {
    let results: PhotoModel[] = [];
    service.getPhotos({ page: 0, limit: 9 }).subscribe(photos => (results = photos));
    tick(400);
    results.forEach(photo => expect(photo.id).toMatch(/^0-/));
  }));
});
