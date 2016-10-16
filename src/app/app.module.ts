import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyInfoComponent } from './property-info/property-info.component';
import { PropertyAddressComponent } from './property-address/property-address.component';
import { MoneyItemComponent } from './money-item/money-item.component';
import { MoneyItemListComponent } from './money-item-list/money-item-list.component';
import { MoneySummaryComponent } from './money-summary/money-summary.component';
import { MoneySummaryByMonthComponent } from './money-summary-by-month/money-summary-by-month.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {AppRoutes} from "./app.routes";
import { PropertySummaryComponent } from './property-summary/property-summary.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    PropertyListComponent,
    PropertyInfoComponent,
    PropertyAddressComponent,
    MoneyItemComponent,
    MoneyItemListComponent,
    MoneySummaryComponent,
    MoneySummaryByMonthComponent,
    PropertySummaryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
