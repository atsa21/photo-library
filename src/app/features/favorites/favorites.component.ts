import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from '@core/services/favorites.service';
import { PhotoModel } from '@core/models';
import { CardGridComponent } from '@shared/components/card-grid/card-grid.component';
import { PhotoCardComponent } from "@shared/components/photo-card/photo-card.component";

@Component({
  selector: 'app-favorites',
  imports: [CardGridComponent, PhotoCardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent {
  private favoritesService = inject(FavoritesService);
  private router = inject(Router);

  photoList = signal(this.favoritesService.photos());

  openPhoto(photo: PhotoModel): void {
    this.router.navigate(['photos', photo.id]);
  }
}
