import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntheseCentreComponent } from './synthese-centre.component';

describe('SyntheseCentreComponent', () => {
  let component: SyntheseCentreComponent;
  let fixture: ComponentFixture<SyntheseCentreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyntheseCentreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyntheseCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
