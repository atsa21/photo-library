import { Injectable } from '@angular/core';
import { FiltersModel, PhotoModel } from '@core/models';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  getPhotos(filters: FiltersModel): Observable<PhotoModel[]> {
    const delayMs = 200 + Math.random()* 100;
    const photos = Array.from({ length: filters.limit }, (_, i) => ({
      id: `${filters.page}-${i}-${Date.now()}`,
      url: `https://picsum.photos/seed/${filters.page}${i}/1200/900`,
      thumbUrl: `https://picsum.photos/seed/${filters.page}${i}/400/300`,
    }))
    return of(photos).pipe(delay(delayMs));
  }
}
