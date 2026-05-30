import { Component, input, output } from '@angular/core';
import { PhotoModel } from '@core/models';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-photo-card',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './photo-card.component.html',
  styleUrl: './photo-card.component.scss',
})
export class PhotoCardComponent {
  photo = input.required<PhotoModel>();
  favorite = input<boolean>(false);
  photoClick = output<PhotoModel>();
}
