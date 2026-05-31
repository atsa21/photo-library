import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { of } from 'rxjs';
import { ComponentRef } from '@angular/core';

import { CardGridComponent } from './card-grid.component';
import { BREAKPOINTS } from '@core/constants';

function makeBreakpointSpy(tablet: boolean, mobile = false): jasmine.SpyObj<BreakpointObserver> {
  const spy = jasmine.createSpyObj<BreakpointObserver>('BreakpointObserver', ['observe']);
  spy.observe.and.callFake((query: string | string[]) => {
    const matches = query === BREAKPOINTS.mobile ? mobile : tablet;
    return of({ matches, breakpoints: {} } as BreakpointState);
  });
  return spy;
}

describe('CardGridComponent', () => {
  let component: CardGridComponent;
  let componentRef: ComponentRef<CardGridComponent>;
  let fixture: ComponentFixture<CardGridComponent>;
  let hostEl: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardGridComponent],
      providers: [{ provide: BreakpointObserver, useValue: makeBreakpointSpy(false) }],
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

  it('should apply default 3-column 1-row grid 8px gap', () => {
    fixture.detectChanges();
    expect(hostEl.style.gridTemplateColumns).toBe('repeat(3, 1fr)');
    expect(hostEl.style.gridTemplateRows).toBe('repeat(1, 1fr)');
    expect(hostEl.style.gap).toBe('8px');
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

  it('should apply tabletColumn when on tablet screen', async () => {
    TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      imports: [CardGridComponent],
      providers: [{ provide: BreakpointObserver, useValue: makeBreakpointSpy(true) }],
    }).compileComponents();

    const tabletFixture = TestBed.createComponent(CardGridComponent);
    tabletFixture.componentRef.setInput('tabletColumn', 2);
    tabletFixture.detectChanges();

    expect(tabletFixture.nativeElement.style.gridTemplateColumns).toBe('repeat(2, 1fr)');
  });

  it('should apply mobileColumn 1 when on mobile screen', async () => {
    TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      imports: [CardGridComponent],
      providers: [{ provide: BreakpointObserver, useValue: makeBreakpointSpy(false, true) }],
    }).compileComponents();

    const mobileFixture = TestBed.createComponent(CardGridComponent);
    mobileFixture.detectChanges();

    expect(mobileFixture.nativeElement.style.gridTemplateColumns).toBe('repeat(1, 1fr)');
  });
});
