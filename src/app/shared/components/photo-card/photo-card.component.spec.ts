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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update img src when photo input changes', () => {
    fixture.componentRef.setInput('photo', MOCK_PHOTO);
    fixture.detectChanges();
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.src).toBe(MOCK_PHOTO.thumbUrl);
  });
});
