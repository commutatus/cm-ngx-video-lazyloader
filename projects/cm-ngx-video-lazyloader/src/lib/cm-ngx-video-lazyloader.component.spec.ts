import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmNgxVideoLazyloaderComponent } from './cm-ngx-video-lazyloader.component';

describe('CmNgxVideoLazyloaderComponent', () => {
  let component: CmNgxVideoLazyloaderComponent;
  let fixture: ComponentFixture<CmNgxVideoLazyloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmNgxVideoLazyloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmNgxVideoLazyloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
