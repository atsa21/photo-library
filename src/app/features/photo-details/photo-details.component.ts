import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { FavoritesService } from '@core/services/favorites.service';
import { ConfirmDialogComponent } from '@shared/components/confirm-dialog/confirm-dialog.component';
import { PhotoModel } from '@core/models';

@Component({
  selector: 'app-photo-details',
  imports: [MatButtonModule],
  templateUrl: './photo-details.component.html',
  styleUrl: './photo-details.component.scss',
})
export class PhotoDetailsComponent implements OnInit {
  photo = signal<PhotoModel | undefined>(undefined);

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private dialog = inject(MatDialog);
  private favoritesService = inject(FavoritesService);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.photo.set(this.favoritesService.getById(id ?? ''));
  }

  remove(id: string): void {
    this.dialog.open(ConfirmDialogComponent)
      .afterClosed()
      .subscribe((confirmed) => {
        if (confirmed) {
          this.favoritesService.removeFavorite(id);
          this.router.navigate(['favorites']);
        }
      });
  }
}
