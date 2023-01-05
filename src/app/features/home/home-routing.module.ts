import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindYourCarComponent } from './find-your-car/find-your-car.component';
import { HomeComponent } from './home.component';
import { SearchCarComponent } from './search-car/search-car.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"", component:FindYourCarComponent},
  {path:"", component:SearchCarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
