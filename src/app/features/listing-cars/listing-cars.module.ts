import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListingCarsRoutingModule } from './listing-cars-routing.module';
import { TitleListingCarsComponent } from './title-listing-cars/title-listing-cars.component';
import { ListingCarsComponent } from './listing-cars.component';
import {NgxPaginationModule} from 'ngx-pagination';




@NgModule({
  declarations: [
    TitleListingCarsComponent,
    ListingCarsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ListingCarsRoutingModule,
    NgxPaginationModule,
    HttpClientModule
  ]
})
export class ListingCarsModule { }
