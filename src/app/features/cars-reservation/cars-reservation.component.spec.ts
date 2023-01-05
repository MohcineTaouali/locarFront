import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsReservationComponent } from './cars-reservation.component';

describe('CarsReservationComponent', () => {
  let component: CarsReservationComponent;
  let fixture: ComponentFixture<CarsReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
