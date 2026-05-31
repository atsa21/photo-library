import { Component, computed, inject, input } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { BREAKPOINTS } from '@core/constants';

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
  gap = input<number>(8);
  tabletColumn = input<number>(2);
  mobileColumn = input<number>(1);

  private breakpointObserver = inject(BreakpointObserver);

  private isTablet = toSignal(
    this.breakpointObserver.observe(BREAKPOINTS.tablet).pipe(map(({ matches }) => matches)),
    { initialValue: false },
  );

  private isMobile = toSignal(
    this.breakpointObserver.observe(BREAKPOINTS.mobile).pipe(map(({ matches }) => matches)),
    { initialValue: false },
  );

  hostStyle = computed(() => {
    const cols = this.isMobile()
      ? this.mobileColumn()
      : this.isTablet() && this.tabletColumn()
        ? this.tabletColumn()
        : this.columns();

    return {
      display: 'grid',
      'grid-template-columns': `repeat(${cols}, 1fr)`,
      ...(this.rows() ? { 'grid-template-rows': `repeat(${this.rows()}, 1fr)` } : {}),
      gap: `${this.gap()}px`,
    };
  });
}
