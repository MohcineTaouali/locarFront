import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FindYourCarComponent } from './find-your-car/find-your-car.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchCarComponent } from './search-car/search-car.component';
import { PartnersLocationComponent } from './partners-location/partners-location.component';
import { MarkCarsComponent } from './mark-cars/mark-cars.component';
import { BookFreeCarComponent } from './book-free-car/book-free-car.component';
import { OurAdvantagesComponent } from './our-advantages/our-advantages.component';
import { MarksCarsComponent } from './marks-cars/marks-cars.component';
import * as $ from 'jquery';


@NgModule({
  declarations: [
    HomeComponent,
    FindYourCarComponent,
    SearchCarComponent,
    PartnersLocationComponent,
    MarkCarsComponent,
    BookFreeCarComponent,
    OurAdvantagesComponent,
    MarksCarsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
