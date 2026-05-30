import { Component, CUSTOM_ELEMENTS_SCHEMA, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DEFAULT_FILTERS } from '@core/constants';
import { FiltersModel, PhotoModel } from '@core/models';
import { PhotosService } from '@core/services/photos.service';
import { PhotoCardComponent } from '@shared/components/photo-card/photo-card.component';
import { take } from 'rxjs';

@Component({
  selector: 'app-photos',
  imports: [PhotoCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss',
})
export class PhotosComponent implements OnInit {
  public photoList = signal<PhotoModel[]>([]);
  private filters = signal<FiltersModel>(DEFAULT_FILTERS);
  private photosService = inject(PhotosService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.getPhotos();
  }

  private getPhotos(isPaginated = false): void {
    if (isPaginated) {
      this.filters.update((filter) => ({ ...filter, page: filter.page + 1 }));
    }
    this.photosService
      .getPhotos(this.filters())
      .pipe(take(1), takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => {
      this.photoList.set(res);
    })
  }
}
