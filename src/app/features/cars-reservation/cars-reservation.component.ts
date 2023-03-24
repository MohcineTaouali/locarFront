import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservation.model';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-cars-reservation',
  templateUrl: './cars-reservation.component.html',
  styleUrls: ['./cars-reservation.component.scss']
})
export class CarsReservationComponent implements OnInit {

  objetresrvation:Reservation={
  };
  client:Client={
  };

  dateDebut:string="";
  dateFin:string="";

  imagesCar:any[]| undefined;

  formAddClient = new FormGroup({
    firstName:new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]+$') ]),
    lastName:new FormControl('', [Validators.required, Validators.minLength(3),  Validators.pattern('[a-zA-Z]+$') ]),
    phone:new FormControl('', [Validators.required, Validators.minLength(10),  Validators.pattern('[0-9]+$') ]),
    email:new FormControl('', [Validators.required, Validators.email]), 
  });

  constructor(private CarService:CarService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let idCar = this.route.snapshot.paramMap.get('id');
    this.CarService.findById(idCar !== null ? parseInt(idCar) : 0).subscribe(data=>{
      this.imagesCar = data[0].imageVs;
       console.log("car infos : ", this.imagesCar);
    });
    this.dateDebut=this.CarService.getDateDebut();
    this.dateFin=this.CarService.getDateFin();
  }

  addReservation(){
    let idCar = this.route.snapshot.paramMap.get('id');
    this.objetresrvation.dateDebut = this.dateDebut;
    this.objetresrvation.dateFin = this.dateFin;
    this.objetresrvation.idCar =  idCar !== null ? parseInt(idCar) : undefined;
    this.objetresrvation.idClients = this.client.id;
    this.CarService.addReservation(this.objetresrvation).subscribe(data=>{
    console.log("add reservation : ",data);
    alert("votre reservation a été bien enregistré ");
    });
  }

  addClient(){
    this.client.firstName = this.formAddClient.get('firstName')?.value;
    this.client.lastName = this.formAddClient.get('lastName')?.value;
    this.client.phone = this.formAddClient.get('phone')?.value;
    this.client.Email = this.formAddClient.get('email')?.value;
    this.CarService.newClient(this.client).subscribe(data=>{
    console.log("add client : ",data);
    });
  }

  get firstName(){
    return this.formAddClient.get('firstName');
  }
  get lastName(){
    return this.formAddClient.get('lastName');
  }
  get phone(){
    return this.formAddClient.get('phone');
  }
  get email(){
    return this.formAddClient.get('email');
  }

}
