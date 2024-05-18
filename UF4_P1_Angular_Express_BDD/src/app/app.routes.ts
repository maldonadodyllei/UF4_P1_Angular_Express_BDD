import { Routes } from '@angular/router';
import { HomeComponent } from '../app/modules/home/home.component';
import { CarsComponent } from './modules/cars/cars.component';
import { AdminComponent } from './modules/admin/admin.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'models', component: CarsComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
