import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueEmployeComponent } from './statistique-employe.component';

describe('StatistiqueEmployeComponent', () => {
  let component: StatistiqueEmployeComponent;
  let fixture: ComponentFixture<StatistiqueEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistiqueEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiqueEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
