import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PxAlertMessageComponent } from './px-alert-message.component';

describe('PxAlertMessageComponent', () => {
  let component: PxAlertMessageComponent;
  let fixture: ComponentFixture<PxAlertMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PxAlertMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PxAlertMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
