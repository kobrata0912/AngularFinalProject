import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmodelsComponent } from './carmodels.component';

describe('CarmodelsComponent', () => {
  let component: CarmodelsComponent;
  let fixture: ComponentFixture<CarmodelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarmodelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarmodelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
