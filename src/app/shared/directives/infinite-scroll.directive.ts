import { Directive, inject, input, ElementRef, OnDestroy, output, OnInit } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]',
})
export class InfiniteScrollDirective implements OnDestroy, OnInit {
  scrollDisabled = input<boolean>(false);
  scrolled = output();

  private observer!: IntersectionObserver;
  private sentinel!: HTMLDivElement;

  private el = inject(ElementRef);

  ngOnInit(): void {
    this.sentinel = document.createElement('div');
    this.el.nativeElement.appendChild(this.sentinel);

    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !this.scrollDisabled()) {
        console.log(this.scrollDisabled());
        this.scrolled.emit();
      }
    });
    this.observer.observe(this.sentinel);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
