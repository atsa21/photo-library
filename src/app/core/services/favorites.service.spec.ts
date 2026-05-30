import { TestBed } from '@angular/core/testing';

import { FavoritesService } from './favorites.service';
import { PhotoModel } from '@core/models';
import { PHOTO_STORAGE_KEY } from '@core/constants';
import { MOCK_PHOTOS } from '@core/mocks';

const mockPhoto: PhotoModel = MOCK_PHOTOS[0];

describe('FavoritesService', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(TestBed.inject(FavoritesService)).toBeTruthy();
  });

  describe('load', () => {
    it('should start with empty photos when localStorage is empty', () => {
      const service = TestBed.inject(FavoritesService);

      expect(service.photos()).toEqual([]);
    });

    it('should load photos from localStorage on init', () => {
      localStorage.setItem(PHOTO_STORAGE_KEY, JSON.stringify([mockPhoto]));
      const service = TestBed.inject(FavoritesService);

      expect(service.photos()).toEqual([mockPhoto]);
    });

    it('should return empty array when localStorage contains invalid JSON', () => {
      localStorage.setItem(PHOTO_STORAGE_KEY, 'invalid-json');
      const service = TestBed.inject(FavoritesService);

      expect(service.photos()).toEqual([]);
    });
  });

  describe('addFavorite', () => {
    let service: FavoritesService;

    beforeEach(() => {
      service = TestBed.inject(FavoritesService);
    });

    it('should add a photo to photos', () => {
      service.addFavorite(mockPhoto);

      expect(service.photos()).toContain(mockPhoto);
      expect(service.count()).toBe(1);
    });

    it('should append each photo without replacing previous entries', () => {
      service.addFavorite(MOCK_PHOTOS[0]);
      service.addFavorite(MOCK_PHOTOS[1]);

      expect(service.photos()).toEqual([MOCK_PHOTOS[0], MOCK_PHOTOS[1]]);
      expect(service.count()).toBe(2);
    });

    it('should not change favoritesList if photo is already favorite', () => {
      service.addFavorite(MOCK_PHOTOS[0]);
      service.addFavorite(MOCK_PHOTOS[0]);

      expect(service.photos()).toEqual([MOCK_PHOTOS[0]]);
      expect(service.count()).toBe(1);
    });
  });

  describe('removeFavorite', () => {
    let service: FavoritesService;

    beforeEach(() => {
      service = TestBed.inject(FavoritesService);
    });

    it('should remove by id added photo', () => {
      service.addFavorite(mockPhoto);
      service.removeFavorite(mockPhoto.id);

      expect(service.photos()).not.toContain(mockPhoto);
      expect(service.count()).toBe(0);
    });
  });

  describe('updateFavorite', () => {
    let service: FavoritesService;

    beforeEach(() => {
      service = TestBed.inject(FavoritesService);
    });

    it('should update photo list', () => {
      service['updateFavorite']([mockPhoto]);

      expect(service.photos()).toContain(mockPhoto);
      expect(service.count()).toBe(1);
    });
  });

  describe('isFavorite', () => {
    let service: FavoritesService;

    beforeEach(() => {
      service = TestBed.inject(FavoritesService);
    });

    it('should return true if provided photo id already in favoriteList', () => {
      service['favoriteList'].set([mockPhoto]);
      expect(service.isFavorite(mockPhoto.id)).toBeTrue();
    });

    it('should return false if provided photo id is not in favoriteList', () => {
      service['favoriteList'].set([]);
      expect(service.isFavorite(mockPhoto.id)).toBeFalse();
    });
  });

  describe('getById', () => {
    let service: FavoritesService;

    beforeEach(() => {
      service = TestBed.inject(FavoritesService);
    });

    it('should return photo by id from favoriteList', () => {
      service['favoriteList'].set([mockPhoto]);
      expect(service.getById(mockPhoto.id)).toEqual(mockPhoto);
    });

    it('should return undefined if provided photo id is not in favoriteList', () => {
      service['favoriteList'].set([]);
      expect(service.getById(mockPhoto.id)).toBeUndefined();
    });
  });
});
