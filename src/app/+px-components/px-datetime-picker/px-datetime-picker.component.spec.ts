import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PxDatetimePickerComponent } from './px-datetime-picker.component';

describe('PxDatetimePickerComponent', () => {
  let component: PxDatetimePickerComponent;
  let fixture: ComponentFixture<PxDatetimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PxDatetimePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PxDatetimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
