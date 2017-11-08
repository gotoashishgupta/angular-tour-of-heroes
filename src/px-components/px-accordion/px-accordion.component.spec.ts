import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PxAccordionComponent } from './px-accordion.component';

describe('PxAccordionComponent', () => {
  let component: PxAccordionComponent;
  let fixture: ComponentFixture<PxAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PxAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PxAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
