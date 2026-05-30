import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NAV_LIST } from '@core/constants';
import { NavListModel } from '@core/models';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [RouterLink,  MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navList: NavListModel[] = NAV_LIST;

  private router = inject(Router);

  isActive(nav: NavListModel): boolean {
    const url = this.router.url;

    if (nav.activePaths) {
      return nav.activePaths.some(p => url.includes(p));
    }

    return nav.exactMatch ? url === nav.path : url.startsWith(nav.path);
  }
}
