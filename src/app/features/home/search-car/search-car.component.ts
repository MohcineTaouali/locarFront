import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Route } from '@angular/router';
@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.scss']
})
export class SearchCarComponent implements OnInit {
  carsDispo:Car[]=[];
  citys: any[] = [
    {value: 'Casablanca', viewValue: 'Steak'},
    {value: 'rabat', viewValue: 'Pizza'},
    {value: 'Fes', viewValue: 'Tacos'},
  ];
  events: string[] = [];
  searchCarForm = new FormGroup({
    dateDepart: new FormControl(''),
    dateRetour: new FormControl(''),
  });

  dateDebut:Date= new Date('');
  dateFin:Date= new Date('');
    

  constructor(private carService:CarService, private datePipe: DatePipe) { }

  ngOnInit() {
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    console.log("value date debut : ", this.events);
  }

  setDateDebut(value: string) {
    this.carService.setDateDebut(value);
  }

  setDateFin(value: string) {
    this.carService.setDateFin(value);
  }

  getDispoCar(){
    let formatedDateDebut = this.dateDebut.toISOString().substr(0, 10); 
    let  formatedDateFin = this.dateFin.toISOString().substr(0, 10);
    this.carService.setDateDebut(formatedDateDebut);
    this.carService.setDateFin(formatedDateFin);
    // this.router.navigateByUrl('cars');
    
    
    // this.carService.findDispoCar(formatedDateDebut, formatedDateFin).subscribe(data =>{
    //   console.log("dateDebut variable :", formatedDateDebut);
    //   console.log("dateFin variable :", formatedDateFin);
    //   console.log("cars dispo list :", data);
    // });
  }

  // onSubmit() {
  //   console.log("dateDepart value :", this.searchCarForm.value.dateDepart);
  //   console.log("dateRetour value :", this.searchCarForm.value.dateRetour);
  // }

}
