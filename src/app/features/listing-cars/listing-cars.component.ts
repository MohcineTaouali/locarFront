import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { TypeVehicule } from 'src/app/models/type-vehicule.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-listing-cars',
  templateUrl: './listing-cars.component.html',
  styleUrls: ['./listing-cars.component.scss']
})
export class ListingCarsComponent implements OnInit {

  ListCars: Car[] = [];
  typeCar:TypeVehicule[] = [];

  constructor(private carService:CarService) { }

  ngOnInit(): void {

    this.getVehicules();

    $(function() {
      $('.flip-btn').on( 'click', function() {
        $( this ).parent().toggleClass('flip-active');
      });
    
      $('.flip-btn-hide').on( 'click', function() {
        $(this).parents('.b-goods').removeClass('flip-active');
      });
    });
  }

  getVehicules(){
   this.carService.findAll().subscribe(data =>{
    this.ListCars=data;
    console.log("my array :", this.ListCars);
   });

  }

}
