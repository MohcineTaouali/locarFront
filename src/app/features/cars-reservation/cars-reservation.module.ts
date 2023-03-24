import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsReservationRoutingModule } from './cars-reservation-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarsReservationComponent } from './cars-reservation.component';
import { TitleCarsReservationComponent } from './title-cars-reservation/title-cars-reservation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CarsReservationComponent,
    TitleCarsReservationComponent
  ],
  imports: [
    CommonModule,
    CarsReservationRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CarsReservationModule { }
