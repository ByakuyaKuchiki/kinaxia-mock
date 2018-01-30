import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtrlInterneComponent } from './ctrl-interne.component';

describe('CtrlInterneComponent', () => {
  let component: CtrlInterneComponent;
  let fixture: ComponentFixture<CtrlInterneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtrlInterneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtrlInterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
