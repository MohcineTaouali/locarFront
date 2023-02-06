import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="http://127.0.0.1:8000/api/vehicules";
  // http://127.0.0.1:8000/api/vehicules/disponible/2023-01-28/2023-01-30

  constructor(private http: HttpClient) { }

  private dateDebut:string='';
  private dateFin:string='';

  setDateDebut(value: string) {
    this.dateDebut = value;
  }

  getDateDebut() {
    return this.dateDebut;
  }

  setDateFin(value: string) {
    this.dateFin = value;
  }

  getDateFin() {
    return this.dateFin;
  }

  public findAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }
  public findByMarque(marque:string): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}/marque='${marque}'`);
  }
  public findDispoCar() {
    return this.http.get<Car[]>(`${this.apiUrl}/disponible/${this.dateDebut}/${this.dateFin}`);
  }
}
