import { Component, OnInit, Renderer2 } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Pipe } from '@angular/compiler/src/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.scss']
})
export class SearchCarComponent implements OnInit {
  carsDispo:Car[]=[];
  citys:any[] = ['casablanca', 'Casablanca Aéroport', 'Casablanca, Casa Voyageurs Gare', 'Casablanca, Casa-Port Gare', 'Rabat Ville', 'Rabat, Ville Gare'];
  filteredCities:any[] = [];
  events: string[] = [];
  searchCarForm = new FormGroup({
    dateDepart: new FormControl(''),
    dateRetour: new FormControl(''),
    city: new FormControl(''),
  });

  dateDebut:Date= new Date('');
  dateFin:Date= new Date('');
  citySelected:string='';
  minDate: Date;
    

  constructor(private carService:CarService, private datePipe: DatePipe, private fb: FormBuilder, private renderer: Renderer2) { 
    this.minDate = new Date();
  }

  ngOnInit() {
  }

  setDateDebut(value: string) {
    this.carService.setDateDebut(value);
  }

  setDateFin(value: string) {
    this.carService.setDateFin(value);
  }

  getDispoCar(){
    let formatedDateDebut = this.dateDebut.toISOString().substr(0, 10); 
    let formatedDateFin = this.dateFin.toISOString().substr(0, 10);
    this.carService.setDateDebut(formatedDateDebut);
    this.carService.setDateFin(formatedDateFin);
    this.carService.setCityCar(this.citySelected);
    console.log("value date debut :", formatedDateDebut);
    console.log("value date fin :", formatedDateFin);
    console.log("value select city :", this.citySelected);
  }

  onInputChange() {
    this.renderer.setStyle(document.getElementById('listCitySearched'), 'display', 'block');
    const inputValue = this.searchCarForm.value.city.toLowerCase();
    this.filteredCities = this.citys.filter(city => city.toLowerCase().includes(inputValue));
    console.log("filteredCities = ", this.filteredCities);
  }

  getValueCity(event: MouseEvent){
    const selectedValue = (event.target as HTMLLIElement).innerText;
    this.citySelected=selectedValue;
    this.renderer.setStyle(document.getElementById('listCitySearched'), 'display', 'none');
    console.log(selectedValue);
  }

  // onSubmit() {
  //   console.log("dateDepart value :", this.searchCarForm.value.dateDepart);
  //   console.log("dateRetour value :", this.searchCarForm.value.dateRetour);
  // }

}
