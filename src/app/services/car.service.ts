import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="http://127.0.0.1:8000/api/vehicules";

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }
  public findByMarque(marque:string): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}/marque='${marque}'`);
  }
}
