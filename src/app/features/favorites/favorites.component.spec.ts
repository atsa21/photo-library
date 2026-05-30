import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { FavoritesComponent } from './favorites.component';
import { FavoritesService } from '@core/services/favorites.service';
import { MOCK_PHOTOS } from '@core/mocks';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);
    const favoritesServiceStub = {
      photos: jasmine.createSpy('photos').and.returnValue(MOCK_PHOTOS),
    };

    await TestBed.configureTestingModule({
      imports: [FavoritesComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: FavoritesService, useValue: favoritesServiceStub },
      ],
    }).compileComponents();

    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set photosList', () => {
    expect(component.photoList().length).toBe(MOCK_PHOTOS.length);
  });

  it('should render a photo card for each photo', () => {
    const cards = fixture.nativeElement.querySelectorAll('app-photo-card');
    expect(cards.length).toBe(MOCK_PHOTOS.length);
  });

  it('should call router navigate on openPhoto', () => {
    component.openPhoto(MOCK_PHOTOS[0]);

    expect(router.navigate).toHaveBeenCalledOnceWith(['photos', MOCK_PHOTOS[0].id]);
  });
});
