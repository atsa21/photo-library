import { Component } from '@angular/core';
import { InfiniteScrollDirective } from './infinite-scroll.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

class MockIntersectionObserver {
  static instance: MockIntersectionObserver;
  private callback: IntersectionObserverCallback;

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
    MockIntersectionObserver.instance = this;
  }

  observe = jasmine.createSpy('observe');
  disconnect = jasmine.createSpy('disconnect');
  unobserve = jasmine.createSpy('unobserve');
  takeRecords = () => [];

  trigger(isIntersecting: boolean): void {
    this.callback(
      [{ isIntersecting } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver
    );
  }
}

@Component({
  template: `
    <div class="scroll-container"
         style="height: 200px; overflow-y: auto;"
         appInfiniteScroll
         (scrolled)="onScrolled()">
        @for(item of items; track item) {
          <div style="height: 50px;">{{ item }}</div>
        }
      <
    </div>
  `,
  standalone: true,
  imports: [InfiniteScrollDirective],
})
class TestHostComponent {
  items = [1, 2, 3];
  scrollCount = 0;

  onScrolled(): void {
    this.scrollCount++;
  }
}

describe('InfiniteScrollDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let original: typeof IntersectionObserver;

  beforeEach(() => {
    original = window.IntersectionObserver;
    (window as any).IntersectionObserver = MockIntersectionObserver;
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  afterEach(() => {
    window.IntersectionObserver = original;
  });

  it('should create an instance', () => {
    const el = fixture.debugElement.query(By.directive(InfiniteScrollDirective));
    expect(el.injector.get(InfiniteScrollDirective)).toBeTruthy();
  });

  it('should observe a sentinel element', () => {
    expect(MockIntersectionObserver.instance.observe).toHaveBeenCalledTimes(1);
  });

  it('should emit on intersection', () => {
    MockIntersectionObserver.instance.trigger(true);
    expect(fixture.componentInstance.scrollCount).toBe(1);
  });

  it('should not emit when not intersecting', () => {
    MockIntersectionObserver.instance.trigger(false);
    expect(fixture.componentInstance.scrollCount).toBe(0);
  });

  it('should disconnect on destroy', () => {
    fixture.destroy();
    expect(MockIntersectionObserver.instance.disconnect).toHaveBeenCalled();
  });
});
