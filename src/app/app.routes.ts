import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'photos', pathMatch: 'full' },
  { path: 'photos', loadComponent: () => import('./features/photos/photos.component').then(m => m.PhotosComponent) },
  { path: 'favorites', loadComponent: () => import('./features/favorites/favorites.component').then(m => m.FavoritesComponent) },
  { path: 'photos/:id', loadComponent: () => import('./features/photo-details/photo-details.component').then(m => m.PhotoDetailsComponent) },
  { path: '**', redirectTo: '' },
];
