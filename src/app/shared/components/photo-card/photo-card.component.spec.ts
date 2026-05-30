import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCardComponent } from './photo-card.component';
import { PhotoModel } from '@core/models';
import { MOCK_PHOTOS } from '@core/mocks';

const mockPhoto: PhotoModel = MOCK_PHOTOS[0];

describe('PhotoCardComponent', () => {
  let component: PhotoCardComponent;
  let fixture: ComponentFixture<PhotoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('photo', mockPhoto);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update img src when photo input changes', () => {
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.getAttribute('src')).toBe(mockPhoto.thumbUrl);
  });

  it('should emit photoClick with photo on img click', () => {
    let emitted: PhotoModel | undefined;
    component.photoClick.subscribe((photo: PhotoModel) => (emitted = photo));

    fixture.nativeElement.querySelector('img').click();

    expect(emitted).toEqual(mockPhoto);
  });
});
