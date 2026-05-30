import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { ComponentRef } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let componentRef: ComponentRef<HeaderComponent>;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set navList when provided in input', () => {
    componentRef.setInput('navList', [{ label: 'Photos', path: './photos' }]);
    fixture.detectChanges();
    expect(component['navList'].length).toBe(1);
  });
});
