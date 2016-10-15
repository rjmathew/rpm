import { Routes } from '@angular/router';
import {PropertyComponent} from "./property/property.component";
import {PropertyListComponent} from "./property-list/property-list.component";

export const AppRoutes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'property/:id', component: PropertyComponent }
];
