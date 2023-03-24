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
  marks: any[] = [
    {value: 'all'},
    {value: 'renault'},
    {value: 'land rover'},
    {value: 'kia'},
    {value: 'fiat'},
  ];
  currentItem:any="all";
  valuMarque:string="";
  datafilter:string="";
  public loadingSpinner:boolean=true;

  p: number = 1;

  constructor(private carService:CarService, private elementRef: ElementRef) {
   }

  ngOnInit(): void {
    this.getVehicules();
    this.valueAttrType = this.elementRef.nativeElement.getAttribute('datafilter');

  }

  getVehicules(){
    this.carService.findAll().subscribe(data =>{
     this.ListCars=data;
     this.loadingSpinner=false;
     console.log("my array :", this.ListCars);
    });
   }

   getValueByMark(valuMarque:string){
    this.loadingSpinner=true;
    this.carService.findByMarque(valuMarque).subscribe(data =>{
      this.ListCars=data;
      this.loadingSpinner=false;
      this.currentItem=valuMarque;
      console.log("my array filtred :", this.ListCars);
    });
   }

}
