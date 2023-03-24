import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';
import { Reservation } from '../models/reservation.model';
import { FiltreCar } from '../models/filtre-car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiReservation="http://127.0.0.1:8000/reservation/api/new";
  apiUrl="http://127.0.0.1:8000/api/vehicules";
  baseUrl="http://127.0.0.1:8000";
  // http://127.0.0.1:8000/api/vehicules/disponible/2023-01-28/2023-01-30

  constructor(private http: HttpClient) { }

  private dateDebut:string='';
  private dateFin:string='';
  private city:string='';

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

  setCityCar(value: string) {
    this.city = value;
  }

  public static generateOptions(): HttpHeaders {
    // le append du content-type ne fonctionne pas dans le cas d'un post
    const token = localStorage.getItem('userToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return headers;
  }

  public findAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }
  public findByMarque(marque:string): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}/marque/'${marque}'`);
  }
  public findById(id:number): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}/${id}`);
  }
  public findDispoCar(objFiltreCar:FiltreCar) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
    return this.http.post<Car[]>(`${this.apiUrl}/disponible/${this.dateDebut}/${this.dateFin}/${this.city}`,objFiltreCar , {headers:headers});
  }
  public addReservation(body:Reservation) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
    return this.http.post<Reservation[]>(`${this.apiReservation}`,body, {headers:headers});
  }
  public newClient(body:any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
    return this.http.post<any[]>(`${this.baseUrl}/clients/api/new`,body, {headers:headers});
  }
}
