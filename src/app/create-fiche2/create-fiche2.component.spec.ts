import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFiche2Component } from './create-fiche2.component';

describe('CreateFiche2Component', () => {
  let component: CreateFiche2Component;
  let fixture: ComponentFixture<CreateFiche2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFiche2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFiche2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
