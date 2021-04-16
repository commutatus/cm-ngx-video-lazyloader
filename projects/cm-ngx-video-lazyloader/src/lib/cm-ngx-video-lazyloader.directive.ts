import { Directive, ElementRef, OnDestroy, OnInit, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[lazyloadVideo]'
})
export class CmNgxVideoLazyloaderDirective implements OnInit, OnDestroy {

  @Input() lazyLoadPoster = false;
  lazyVideoObserver: IntersectionObserver;
  videoElement: Element;

  constructor(private elRef: ElementRef) {
  }

  ngOnInit() {
    this.videoElement = this.elRef.nativeElement;
    if ('IntersectionObserver' in window) {
      this.lazyVideoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((video: any) => {
          if (video.isIntersecting) {
            if (this.lazyLoadPoster && video.target && video.target.dataset) {
              video.target.poster = video.target.dataset.poster;
            }
            const videoHtmlCollection = [...video.target.children];
            videoHtmlCollection.forEach((source: HTMLVideoElement) => {
              if (typeof source.nodeName === 'string' && source.nodeName === 'SOURCE') {
                source.src = source.dataset.src;
              }
            });

            video.target.load();
            this.lazyVideoObserver.unobserve(video.target);
          }
        });
      });
      this.lazyVideoObserver.observe(this.videoElement);
    }
  }

  ngOnDestroy() {
    this.lazyVideoObserver.unobserve(this.videoElement);
  }
}
