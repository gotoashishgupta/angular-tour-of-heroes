import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PxBrandingBarComponent } from './px-branding-bar.component';

describe('PxBrandingBarComponent', () => {
  let component: PxBrandingBarComponent;
  let fixture: ComponentFixture<PxBrandingBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PxBrandingBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PxBrandingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
