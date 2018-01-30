import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteLinkComponent } from './route-link.component';

describe('RouteLinkComponent', () => {
  let component: RouteLinkComponent;
  let fixture: ComponentFixture<RouteLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
