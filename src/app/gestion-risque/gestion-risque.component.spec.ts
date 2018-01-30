import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRisqueComponent } from './gestion-risque.component';

describe('GestionRisqueComponent', () => {
  let component: GestionRisqueComponent;
  let fixture: ComponentFixture<GestionRisqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionRisqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
