import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCarsReservationComponent } from './title-cars-reservation.component';

describe('TitleCarsReservationComponent', () => {
  let component: TitleCarsReservationComponent;
  let fixture: ComponentFixture<TitleCarsReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleCarsReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCarsReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
