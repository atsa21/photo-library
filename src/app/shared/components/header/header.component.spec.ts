import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router, RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { NAV_LIST } from '@core/constants';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, RouterModule],
      providers: [provideRouter([])]
    })
    .compileComponents();

    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initial navList length to be 2', () => {
    expect(component['navList'].length).toBe(2);
  });

  describe('isActive', () => {
    it('should return true when url matches nav path', () => {
      Object.defineProperty(router, 'url', { get: () => '/', configurable: true });

      expect(component.isActive(NAV_LIST[0])).toBeTrue();
    });

    it('should return true for favorites nav when url is /photos/:id', () => {
      Object.defineProperty(router, 'url', { get: () => '/photos/0', configurable: true });

      expect(component.isActive(NAV_LIST[1])).toBeTrue();
    });

    it('should return false when url does not match nav path', () => {
      Object.defineProperty(router, 'url', { get: () => '/favorites', configurable: true });

      expect(component.isActive(NAV_LIST[0])).toBeFalse();
    });
  });
});
