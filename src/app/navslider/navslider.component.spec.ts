import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavsliderComponent } from './navslider.component';

describe('NavsliderComponent', () => {
  let component: NavsliderComponent;
  let fixture: ComponentFixture<NavsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
