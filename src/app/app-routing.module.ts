import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path:"", loadChildren:()=>import('./features/home/home.module')
  .then(mod=>mod.HomeModule)},
  {path:"cars", loadChildren:()=>import('./features/listing-cars/listing-cars.module')
  .then(mod=>mod.ListingCarsModule)},
  {path:"cars/reservation/:id", loadChildren:()=>import('./features/cars-reservation/cars-reservation.module')
  .then(mod=>mod.CarsReservationModule)},
  {path:"contact", loadChildren:()=>import('./features/contact-us/contact-us.module')
  .then(mod=>mod.ContactUsModule)},
  {path:"**", loadChildren:()=>import('./features/page-not-found/page-not-found.module')
  .then(mod=>mod.PageNotFoundModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
