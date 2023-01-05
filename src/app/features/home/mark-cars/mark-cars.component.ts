import { Component, OnInit, ElementRef } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { TypeVehicule } from 'src/app/models/type-vehicule.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-mark-cars',
  templateUrl: './mark-cars.component.html',
  styleUrls: ['./mark-cars.component.scss']
})
export class MarkCarsComponent implements OnInit {

  ListCars: Car[] = [];
  typeCar:TypeVehicule[] = [];
  valueAttrType:string="";
  marks: any[] =["BMW", "Renault", "land rover"];
  valuMarque:string="";
  datafilter:string="";

  constructor(private carService:CarService, private elementRef: ElementRef) {
   }

  ngOnInit(): void {
    this.getVehicules();
    this.valueAttrType = this.elementRef.nativeElement.getAttribute('datafilter');

  }

  getVehicules(){
    this.carService.findAll().subscribe(data =>{
     this.ListCars=data;
     console.log("my array :", this.ListCars);
    });
   }

   getValueByMark(){
    this.valuMarque="renault";
    this.carService.findByMarque(this.valuMarque).subscribe(data =>{
      this.ListCars=data;
      console.log("my array filtred :", this.ListCars);
    });
   }

}
