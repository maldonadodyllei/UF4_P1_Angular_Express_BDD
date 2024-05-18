import { Injectable, signal } from '@angular/core';
import { Car } from '../interfaces/car.model';
@Injectable({
  providedIn: 'root'
})
export class CarsService {
  carsL = signal<Car[]>([]);
  constructor() { }
}
