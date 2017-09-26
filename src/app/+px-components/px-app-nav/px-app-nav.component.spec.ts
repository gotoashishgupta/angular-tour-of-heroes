import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PxAppNavComponent } from './px-app-nav.component';

describe('PxAppNavComponent', () => {
  let component: PxAppNavComponent;
  let fixture: ComponentFixture<PxAppNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PxAppNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PxAppNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
