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
  p: number = 1;
  selectedItem=-1;

  formatedDateDebut:string='';
  formatedDateFin:string='';

  constructor(private carService:CarService) { }

  ngOnInit(): void {

    this.getDispoCar();

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

  getDispoCar(){
    // let formatedDateDebut = this.carService.getDateDebut; 
    // let formatedDateFin = this.carService.getDateFin;
    // console.log("date debut from service", formatedDateDebut );
    // console.log("date fin from service", formatedDateFin );
    this.carService.findDispoCar().subscribe(data =>{
      this.ListCars=data;
      console.log("cars dispo list :", data);
    });
  }



}
