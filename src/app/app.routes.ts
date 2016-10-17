import { Routes } from '@angular/router';
import {PropertyComponent} from "./property/property.component";
import {PropertyListComponent} from "./property-list/property-list.component";
import {HomeComponent} from "./home/home.component";
import {PropertyFormComponent} from "./property-form/property-form.component";

export const AppRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'newProperty', component: PropertyFormComponent },
  { path: 'properties', component: PropertyListComponent },
  { path: 'property/:propertyId', component: PropertyComponent }
];
