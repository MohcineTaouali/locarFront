import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", loadChildren:()=>import('./features/home/home.module')
  .then(mod=>mod.HomeModule)},
  {path:"cars", loadChildren:()=>import('./features/listing-cars/listing-cars.module')
  .then(mod=>mod.ListingCarsModule)},
  {path:"cars-reservation", loadChildren:()=>import('./features/cars-reservation/cars-reservation.module')
  .then(mod=>mod.CarsReservationModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
