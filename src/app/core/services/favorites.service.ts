import { computed, Injectable, signal } from '@angular/core';
import { PhotoModel } from '@core/models';
import { PHOTO_STORAGE_KEY } from '@core/constants';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private readonly favoriteList = signal<PhotoModel[]>(this.load());

  readonly photos = this.favoriteList.asReadonly();
  readonly count = computed(() => this.favoriteList().length);

  addFavorite(photo: PhotoModel): void {
    if (this.isFavorite(photo.id)) {
      return;
    }
    this.updateFavorite([...this.favoriteList(), photo]);
  }

  removeFavorite(id: string): void {
    this.updateFavorite(this.favoriteList().filter(photo => photo.id !== id));
  }

  isFavorite(id: string): boolean {
    return this.favoriteList().some(photo => photo.id === id);
  }

  getById(id: string): PhotoModel | undefined {
    return this.favoriteList().find(photo => photo.id === id);
  }

  private updateFavorite(photos: PhotoModel[]): void {
    this.favoriteList.set(photos);
    localStorage.setItem(PHOTO_STORAGE_KEY, JSON.stringify(photos));
  }

  private load(): PhotoModel[] {
    try {
      return JSON.parse(localStorage.getItem(PHOTO_STORAGE_KEY) ?? '[]');
    } catch {
      return [];
    }
  }
}
