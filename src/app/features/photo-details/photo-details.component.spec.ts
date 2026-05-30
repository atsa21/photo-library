import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';

import { PhotoDetailsComponent } from './photo-details.component';
import { FavoritesService } from '@core/services/favorites.service';
import { MOCK_PHOTOS } from '@core/mocks';

const MOCK_PHOTO = MOCK_PHOTOS[0];

describe('PhotoDetailsComponent', () => {
  let component: PhotoDetailsComponent;
  let fixture: ComponentFixture<PhotoDetailsComponent>;
  let favoritesService: jasmine.SpyObj<FavoritesService>;
  let router: jasmine.SpyObj<Router>;
  let dialog: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    const favoritesServiceSpy = jasmine.createSpyObj<FavoritesService>('FavoritesService', ['getById', 'removeFavorite']);
    favoritesServiceSpy.getById.and.returnValue(MOCK_PHOTO);

    const routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);
    const dialogSpy = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      imports: [PhotoDetailsComponent],
      providers: [
        { provide: FavoritesService, useValue: favoritesServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: MatDialog, useValue: dialogSpy },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => MOCK_PHOTO.id } } } },
      ],
    }).compileComponents();

    favoritesService = TestBed.inject(FavoritesService) as jasmine.SpyObj<FavoritesService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    dialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
    fixture = TestBed.createComponent(PhotoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get id from url and set photo signal from favoritesService.getById', () => {
    expect(favoritesService.getById).toHaveBeenCalledOnceWith(MOCK_PHOTO.id);
    expect(component.photo()).toEqual(MOCK_PHOTO);
  });

  describe('remove', () => {
    it('should open confirm dialog on remove click', () => {
      dialog.open.and.returnValue({ afterClosed: () => of(null) } as unknown as MatDialogRef<unknown>);

      fixture.nativeElement.querySelector('button').click();

      expect(dialog.open).toHaveBeenCalledTimes(1);
    });

    it('should call removeFavorite and navigate if dialog confirmed', () => {
      dialog.open.and.returnValue({ afterClosed: () => of(true) } as unknown as MatDialogRef<unknown>);

      fixture.nativeElement.querySelector('button').click();

      expect(favoritesService.removeFavorite).toHaveBeenCalledOnceWith(MOCK_PHOTO.id);
      expect(router.navigate).toHaveBeenCalledOnceWith(['favorites']);
    });

    it('should not call removeFavorite if dialog cancelled', () => {
      dialog.open.and.returnValue({ afterClosed: () => of(null) } as unknown as MatDialogRef<unknown>);

      fixture.nativeElement.querySelector('button').click();

      expect(favoritesService.removeFavorite).not.toHaveBeenCalled();
      expect(router.navigate).not.toHaveBeenCalled();
    });
  });
});
