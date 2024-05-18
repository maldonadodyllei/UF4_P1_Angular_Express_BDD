import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  CarForm!: FormGroup;
  nmModel: string = '';
  nmbSeries!: number;
  imagesAM = [
    {
      model: 'DBX707',
      path: 'https://www.astonmartinboston.com/wp-content/uploads/br2nwoSw-1024x669.png',
    },
    {
      model: 'DBX V8',
      path: 'https://www.astonmartinboston.com/wp-content/uploads/Qt7xj2Q.png',
    },
    {
      model: 'Vantage',
      path: 'https://www.astonmartinboston.com/wp-content/uploads/gFlsWY6A.png',
    },
    {
      model: 'DBS Coupe',
      path: 'https://www.astonmartinboston.com/wp-content/uploads/aUHnsBmw.png',
    },
    {
      model: 'DB11',
      path: 'https://www.astonmartinboston.com/wp-content/uploads/rXq4Oh0U.png',
    },
    {
      model: 'DB11 Volante',
      path: 'https://www.astonmartinboston.com/wp-content/uploads/SzYDI8wg.png',
    },
    {
      model: 'DBS 770 Ultimate',
      path: 'https://www.astonmartinwashingtondc.com/wp-content/uploads/aston-martin-dbs-770-ultimate-coupe-1024x728.png',
    },
    {
      model: 'DBS Volante',
      path: 'https://www.astonmartinwashingtondc.com/wp-content/uploads/aston-martin-dbs-volante-1536x1091.png',
    },
  ];

  constructor(private fb: FormBuilder, private carsService: CarsService) {}

  ngOnInit(): void {
    this.CarForm = this.fb.group({
      seriesNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(1000000000),
        Validators.max(9999999999),
      ]),
      model: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      category: new FormControl('', Validators.required),
      image: new FormControl(Validators.required),
      cv: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(100),
        Validators.max(5000),
      ]),
      maxSpeed: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(10),
        Validators.max(800),
      ]),
      accelerationTime: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]+(.[0-9]+)?$'),
        Validators.min(0.1),
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.pattern('^[0-9]+(.[0-9]+)?$'),
      ]),
      available: new FormControl(''),
    });
  }

  onSubmit(): void {
    if (this.CarForm.valid) {
      const currentCars = this.carsService.carsL();
      const newCar = this.CarForm.value;
      const carExist = currentCars.find(
        (car) => car.seriesNumber === this.nmbSeries
      );
      if (carExist) {
        newCar.image = this.getImagePath();
        const updatedCars = currentCars.map((car) => {
          if (car.seriesNumber === this.nmbSeries) {
            return newCar;
          }
          return car;
        });
        this.carsService.carsL.set(updatedCars);
        this.CarForm.reset();
        this.CarForm.patchValue({ category: '' });
        return;
      } else {
        newCar.image = this.getImagePath();

        if (this.verifyModel()) {
          alert('Modelo existente');
          return;
        }
        const updatedCars = [...currentCars, newCar];
        this.carsService.carsL.set(updatedCars);
        this.CarForm.reset();
        this.CarForm.patchValue({ category: '' });
      }
    }
  }

  getImagePath(): string {
    const matchedImage = this.imagesAM.find(
      (image) =>
        image.model.replace(/\s/g, '').toUpperCase() ===
        this.nmModel.replace(/\s/g, '').toUpperCase()
    );
    if (matchedImage) {
      return matchedImage.path;
    } else {
      const randomIndex = Math.floor(Math.random() * this.imagesAM.length);
      return this.imagesAM[randomIndex].path;
    }
  }

  verifyModel(): boolean {
    const currentCars = this.carsService.carsL();
    if (
      currentCars.find(
        (car) =>
          car.model.replace(/\s/g, '').toUpperCase() ===
          this.nmModel.replace(/\s/g, '').toUpperCase()
      )
    ) {
      return true;
    }
    return false;
  }

  verifySeries(): void {
    const currentCars = this.carsService.carsL();
    const car = currentCars.find((car) => car.seriesNumber === this.nmbSeries);
    if (car) {
      setTimeout(() => {
        this.CarForm.patchValue({
          seriesNumber: this.nmbSeries,
          model: car.model,
          category: car.category,
          image: car.image,
          cv: car.cv,
          maxSpeed: car.maxSpeed,
          accelerationTime: car.accelerationTime,
          price: car.price,
          available: car.available,
        });
      });
    }
  }
}
