import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PxClipboardComponent } from './px-clipboard.component';

describe('PxClipboardComponent', () => {
  let component: PxClipboardComponent;
  let fixture: ComponentFixture<PxClipboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PxClipboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PxClipboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
