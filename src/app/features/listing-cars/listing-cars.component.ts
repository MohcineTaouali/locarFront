import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { FiltreCar } from 'src/app/models/filtre-car.model';
import { TypeVehicule } from 'src/app/models/type-vehicule.model';
import { CarService } from 'src/app/services/car.service';
import { FormGroup, FormControl } from '@angular/forms';

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
  villeSearch:string="";

  marque:string="fiat";
  model:string="2014";
  transmission:number=1;
  objFiltreCar:FiltreCar={};

  formatedDateDebut:string='';
  formatedDateFin:string='';
  loadingSpinner:boolean=true;

  formFiltreCars = new FormGroup({
    marque:new FormControl(''),
    model:new FormControl(''),
    transmission:new FormControl(''),
    clim:new FormControl(''),
  });

  marqueSelected:string="";
  marques:any[] = [
     {value: 'fiat'},
     {value: 'kia'},
     {value: 'land rover'},
    ];
  models:any[] = [
    {value: '2010'},
    {value: '2011'},
    {value: '2012'},
    {value: '2013'},
    {value: '2014'},
    {value: '2015'},
    {value: '2016'},
    {value: '2017'},
    {value: '2018'},
    {value: '2019'},
    {value: '2020'},
    {value: '2021'},
    {value: '2022'},
    ];
  transmissions:any[] = [
    {value: 'oui', code: "1"},
    {value: 'non', code: 'false'},
  ];
  clim:any[] = [
    {value: 'oui', code: "1"},
    {value: 'non', code: 'false'},
  ];

  constructor(private carService:CarService) { }

  ngOnInit(): void {

    this.formatedDateDebut=this.carService.getDateDebut();
    this.formatedDateFin=this.carService.getDateFin();
    console.log("dateDebut reçus from service :", this.formatedDateDebut);
    console.log("dateFin reçus from service :", this.formatedDateFin);
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
    this.loadingSpinner=false;
    console.log("my array :", this.ListCars);
   });
  }

  getDispoCar(){
    this.loadingSpinner=true;
    this.objFiltreCar.marque=this.formFiltreCars.get('marque')?.value;
    this.objFiltreCar.model=this.formFiltreCars.get('model')?.value;
    this.objFiltreCar.transmission=this.formFiltreCars.get('transmission')?.value;
    this.objFiltreCar.clim=this.formFiltreCars.get('clim')?.value;
    this.carService.findDispoCar(this.objFiltreCar).subscribe(data =>{
      this.ListCars=data;
      this.loadingSpinner=false;
      console.log("cars dispo list :", data);
    });
  }



}
