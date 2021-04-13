# cm-ngx-video-lazyloader

`cm-ngx-video-lazyloader` is an Angular library for lazy loading videos using IntersectionObserver.

## Install

```
$ npm install --save cm-ngx-video-lazyloader
```

## Usage

1. Import `CmNgxVideoLazyloaderModule` into your root module.
2. Add `libLazyloadVideo` directive to the video tag.
3. Place the video url inside `data-src` attribute instead of `src` attribute. The url will be dynamically assinged to the `src` attribute when the video is in viewport.

#### Example:

```
<video libLazyloadVideo class="card-video" loop autoplay muted id="1" poster="https://example.org/assets/Americas-poster.jpg">
  <source data-src="https://example.org/assets/Americas.mp4" type="video/mp4" />
      Browser not supported
</video>
```

If you wish to lazy load the poster as well, then you can pass in an optional input param `[lazyLoadPoster]="true"` in the video tag and place the poster url inside the `data-poster` attribute. This attribute is set as `false` by default.

#### Example:
```<video libLazyloadVideo  [lazyLoadPoster]="true" data-poster="https://example.org/...></video>```

## Test Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
