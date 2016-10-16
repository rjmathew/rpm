import { Routes } from '@angular/router';
import {PropertyComponent} from "./property/property.component";
import {PropertyListComponent} from "./property-list/property-list.component";
import {HomeComponent} from "./home/home.component";

export const AppRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'properties', component: PropertyListComponent },
  { path: 'property/:propertyId', component: PropertyComponent }
];
