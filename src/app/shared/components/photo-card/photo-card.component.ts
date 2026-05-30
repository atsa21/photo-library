import { Component, input, output } from '@angular/core';
import { PhotoModel } from '@core/models';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-photo-card',
  imports: [MatCardModule],
  templateUrl: './photo-card.component.html',
  styleUrl: './photo-card.component.scss',
})
export class PhotoCardComponent {
  photo = input.required<PhotoModel>();
  photoClick = output<PhotoModel>();
}
