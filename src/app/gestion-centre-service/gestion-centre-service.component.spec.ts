import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCentreServiceComponent } from './gestion-centre-service.component';

describe('GestionCentreServiceComponent', () => {
  let component: GestionCentreServiceComponent;
  let fixture: ComponentFixture<GestionCentreServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionCentreServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCentreServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
