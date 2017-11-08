import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PxBreadcrumbsComponent } from './px-breadcrumbs.component';

describe('PxBreadcrumbsComponent', () => {
  let component: PxBreadcrumbsComponent;
  let fixture: ComponentFixture<PxBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PxBreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PxBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
