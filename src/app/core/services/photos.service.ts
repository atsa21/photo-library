import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FiltersModel, PhotoModel, PhotoRequestModel } from '@core/models';
import { delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  private readonly apiUrl = 'https://picsum.photos/v2/list';
  private http = inject(HttpClient);

  getPhotos(filters: FiltersModel): Observable<PhotoModel[]> {
    const delayMs = 200 + Math.random()* 100;
    const { page, limit } = filters;
    return this.http
      .get<PhotoRequestModel[]>(this.apiUrl, { params: { page, limit } })
      .pipe(map(photos => photos.map(photo => ({
        id: photo.id,
        trackId: `${photo.id}${photo.author}`,
        author: photo.author,
        url: `https://picsum.photos/id/${photo.id}/1200/900.webp`,
        thumbUrl: `https://picsum.photos/id/${photo.id}/400/300.webp`,
      }))),delay(delayMs));
  }
}
