import { Directive, inject, ElementRef, OnDestroy, output, OnInit } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]',
})
export class InfiniteScrollDirective implements OnDestroy, OnInit {
  scrolled = output();

  private observer!: IntersectionObserver;
  private sentinel!: HTMLDivElement;

  private el = inject(ElementRef);

  ngOnInit(): void {
    this.sentinel = document.createElement('div');
    this.el.nativeElement.appendChild(this.sentinel);

    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) this.scrolled.emit();
    });
    this.observer.observe(this.sentinel);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
