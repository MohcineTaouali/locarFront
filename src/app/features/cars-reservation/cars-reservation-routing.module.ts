import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsReservationComponent } from './cars-reservation.component';
import { TitleCarsReservationComponent } from './title-cars-reservation/title-cars-reservation.component';

const routes: Routes = [
  {path:"", component:CarsReservationComponent},
  {path:"", component:TitleCarsReservationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsReservationRoutingModule { }
