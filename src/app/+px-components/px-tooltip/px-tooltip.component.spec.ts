import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PxTooltipComponent } from './px-tooltip.component';

describe('PxTooltipComponent', () => {
  let component: PxTooltipComponent;
  let fixture: ComponentFixture<PxTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PxTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PxTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
