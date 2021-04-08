import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CmNgxVideoLazyloaderService {

  constructor() { }

  lazyLoadVideos() {
    console.log('service');
    const lazyVideos = [].slice.call(document.querySelectorAll('video.cm-angular-lazyloader'));

    if ('IntersectionObserver' in window) {
      const lazyVideoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((video: any) => {
          if (video.isIntersecting) {
            const videoHtmlCollection = [...video.target.children];
            videoHtmlCollection.forEach((source: HTMLVideoElement) => {
              if (typeof source.nodeName === 'string' && source.nodeName === 'SOURCE') {
                source.src = source.dataset.src;
              }
            });

            video.target.load();
            video.target.classList.remove('cm-angular-lazyloader');
            lazyVideoObserver.unobserve(video.target);
          }
        });
      });

      lazyVideos.forEach((lazyVideo) => {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
  }
}
