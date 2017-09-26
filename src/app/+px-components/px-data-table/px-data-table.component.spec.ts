import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PxDataTableComponent } from './px-data-table.component';

describe('PxDataTableComponent', () => {
  let component: PxDataTableComponent;
  let fixture: ComponentFixture<PxDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PxDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PxDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
