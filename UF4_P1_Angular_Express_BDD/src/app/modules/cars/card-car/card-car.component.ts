import { Component, Input } from '@angular/core';
import { Car } from '../../../interfaces/car.model';

@Component({
  selector: 'app-card-car',
  standalone: true,
  imports: [],
  templateUrl: './card-car.component.html',
  styleUrl: './card-car.component.css'
})
export class CardCarComponent {
  @Input({required: true}) car: Car | null = null;

  constructor() {
   }
}
