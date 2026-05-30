import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCardComponent } from './photo-card.component';
import { PhotoModel } from '@core/models';

const MOCK_PHOTO: PhotoModel = { id: '0', url: 'test0.jpg', thumbUrl: 'small_image_test0.jpg' };

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
    fixture.componentRef.setInput('photo', MOCK_PHOTO);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update img src when photo input changes', () => {
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.getAttribute('src')).toBe(MOCK_PHOTO.thumbUrl);
  });

  it('should emit photoClick with photo on img click', () => {
    let emitted: PhotoModel | undefined;
    component.photoClick.subscribe((photo: PhotoModel) => (emitted = photo));

    fixture.nativeElement.querySelector('img').click();

    expect(emitted).toEqual(MOCK_PHOTO);
  });
});
