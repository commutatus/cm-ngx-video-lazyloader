import { CmNgxVideoLazyloaderService } from './../../../cm-ngx-video-lazyloader/src/lib/cm-ngx-video-lazyloader.service';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'cm-ngx-video-lazyloader-demo';

  constructor(private lazyLoaderService: CmNgxVideoLazyloaderService) {
  }

  ngAfterViewInit() {
    this.lazyLoaderService.lazyLoadVideos();
  }
}
