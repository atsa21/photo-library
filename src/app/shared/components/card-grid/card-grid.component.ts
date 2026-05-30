import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-card-grid',
  imports: [],
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.scss',
  host: { '[style]': 'hostStyle()' },
})
export class CardGridComponent {
  columns = input<number>(3);
  rows = input<number>(1);
  gap = input<number>(16);

  hostStyle = computed(() => ({
    display: 'grid',
    'grid-template-columns': `repeat(${this.columns()}, 1fr)`,
    ...(this.rows() ? { 'grid-template-rows': `repeat(${this.rows()}, 1fr)` } : {}),
    gap: `${this.gap()}px`,
  }));
}
