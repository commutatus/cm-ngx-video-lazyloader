import { CmNgxVideoLazyloaderModule } from './../../../cm-ngx-video-lazyloader/src/lib/cm-ngx-video-lazyloader.module';
// import { CmNgxVideoLazyloaderDirective } from './../../../cm-ngx-video-lazyloader/src/lib/cm-ngx-video-lazyloader.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    CmNgxVideoLazyloaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
