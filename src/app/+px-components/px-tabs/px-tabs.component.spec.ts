import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PxTabsComponent } from './px-tabs.component';

describe('PxTabsComponent', () => {
  let component: PxTabsComponent;
  let fixture: ComponentFixture<PxTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PxTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PxTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
