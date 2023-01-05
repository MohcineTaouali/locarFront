import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingCarsComponent } from './listing-cars.component';
import { TitleListingCarsComponent } from './title-listing-cars/title-listing-cars.component';

const routes: Routes = [
  {path:"", component:ListingCarsComponent},
  {path:"", component:TitleListingCarsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingCarsRoutingModule { }
