import { Component, OnInit } from '@angular/core';
import { CardCarComponent } from './card-car/card-car.component';
import { Car } from '../../interfaces/car.model';
import { CarsService } from '../../services/cars.service';
@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CardCarComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit{
  carList: Car[] = [];
  areCoupe = false;
  areCabrio = false;
  areSuv = false;
  constructor(
    public carsService: CarsService
  ) { }

  ngOnInit(): void {
    this.carList = this.carsService.carsL();

    this.carList.forEach(car => {
      if (car.category === 'Coupé') {
        this.areCoupe = true;
      }
      if (car.category === 'Cabriolet') {
        this.areCabrio = true;
      }
      if (car.category === 'SUV') {
        this.areSuv = true;
      }
    });
  }
}
