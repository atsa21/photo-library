import { Component, CUSTOM_ELEMENTS_SCHEMA, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DEFAULT_FILTERS } from '@core/constants';
import { FiltersModel, PhotoModel } from '@core/models';
import { PhotosService } from '@core/services/photos.service';
import { FavoritesService } from '@core/services/favorites.service';
import { PhotoCardComponent } from '@shared/components/photo-card/photo-card.component';
import { take } from 'rxjs';
import { InfiniteScrollDirective } from "@shared/directives/infinite-scroll.directive";
import { LoaderComponent } from "@shared/components/loader/loader.component";
import { CardGridComponent } from '@shared/components/card-grid/card-grid.component';

@Component({
  selector: 'app-photos',
  imports: [
    PhotoCardComponent,
    InfiniteScrollDirective,
    LoaderComponent,
    CardGridComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss',
})
export class PhotosComponent implements OnInit {
  photoList = signal<PhotoModel[]>([]);
  isPaginateLoading = signal(false);
  isLoading = signal(false);

  private filters = signal<FiltersModel>(DEFAULT_FILTERS);
  private photosService = inject(PhotosService);
  private favoritesService = inject(FavoritesService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.getPhotos();
  }

  paginatePhotos(): void {
    if (this.isLoading()) {
      return;
    }
    this.isPaginateLoading.set(true);
    this.getPhotos(true);
  }

  isFavorite(id: string): boolean {
    return this.favoritesService.isFavorite(id);
  }

  makeFavorite(photo: PhotoModel): void {
    this.favoritesService.addFavorite(photo);
  }

  private getPhotos(isPaginated = false): void {
    if (isPaginated) {
      this.filters.update((filter) => ({ ...filter, page: filter.page + 1 }));
    } else {
      this.isLoading.set(true);
    }
    this.photosService
      .getPhotos(this.filters())
      .pipe(take(1), takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => {
        if (isPaginated) {
          this.photoList.update((photos) => [...photos, ...res]);
          this.isPaginateLoading.set(false);
        } else {
          this.photoList.set(res);
          this.isLoading.set(false);
        }
      });
  }
}
