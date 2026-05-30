import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGridComponent } from './card-grid.component';
import { ComponentRef } from '@angular/core';

describe('CardGridComponent', () => {
  let component: CardGridComponent;
  let componentRef: ComponentRef<CardGridComponent>;
  let fixture: ComponentFixture<CardGridComponent>;
  let hostEl: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGridComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    hostEl = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply default 3-column 1-row grid 16px gap', () => {
    fixture.detectChanges();
    expect(hostEl.style.gridTemplateColumns).toBe('repeat(3, 1fr)');
    expect(hostEl.style.gridTemplateRows).toBe('repeat(1, 1fr)');
    expect(hostEl.style.gap).toBe('16px');
  });

  it('should apply custom columns', () => {
    componentRef.setInput('columns', 5);
    fixture.detectChanges();
    expect(hostEl.style.gridTemplateColumns).toBe('repeat(5, 1fr)');
  });

  it('should apply custom rows', () => {
    componentRef.setInput('rows', 2);
    fixture.detectChanges();
    expect(hostEl.style.gridTemplateRows).toBe('repeat(2, 1fr)');
  });

  it('should apply custom gap', () => {
    componentRef.setInput('gap', 24);
    fixture.detectChanges();
    expect(hostEl.style.gap).toBe('24px');
  });

  it('should set display to grid', () => {
    fixture.detectChanges();
    expect(hostEl.style.display).toBe('grid');
  });
});
