import { Injectable, signal } from '@angular/core';
import { Car } from '../interfaces/car.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private url = 'http://localhost:3000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getCars(): Observable<any> {
    return this.http.get<any>(`${this.url}dylanSelect`)
  }

  AddCar(car: Car): Observable<Car> {
    return this.http.post<Car>(`${this.url}dylanPost`, JSON.stringify(car), this.httpOptions).pipe(
      catchError((error)=>{
        console.error('Error al crear el coche')
        console.log(error)
        return throwError(error)
      })
    )
  }

  UpdateCar(car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.url}dylanPut`, JSON.stringify(car), this.httpOptions).pipe(
      catchError((error)=>{
        console.error('Error al actualizar el coche')
        console.log(error)
        return throwError(error)
      })
    )
  }

  DeleteCar(seriesNumber: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    this.http.delete(`${this.url}dylanDelete`, {
      headers: headers,
      body: { seriesNumber: seriesNumber }
    }).subscribe(response => {
      console.log('Coche eliminado', response);
    }, error => {
      console.error('Error al eliminar un coche', error);
    });
  }


}
