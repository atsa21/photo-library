import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { PhotosService } from './photos.service';
import { PhotoModel } from '@core/models';
import { MOCK_PHOTOS } from '@core/mocks';

describe('PhotosService', () => {
  let service: PhotosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(PhotosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the API with correct page and limit params', fakeAsync(() => {
    service.getPhotos({ page: 0, limit: 9 }).subscribe();

    const req = httpMock.expectOne(r => r.url.includes('picsum.photos'));
    expect(req.request.params.get('page')).toBe('0');
    expect(req.request.params.get('limit')).toBe('9');
    req.flush([]);
    tick(400);
  }));

  it('should return photos from API response', fakeAsync(() => {
    let results: PhotoModel[] = [];
    service.getPhotos({ page: 0, limit: 9 }).subscribe(photos => (results = photos));

    httpMock.expectOne(r => r.url.includes('picsum.photos')).flush(MOCK_PHOTOS);
    tick(400);

    expect(results).toEqual(MOCK_PHOTOS);
  }));
});
