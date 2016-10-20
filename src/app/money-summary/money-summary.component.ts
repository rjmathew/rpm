import { Component, OnInit } from '@angular/core';
import {MoneyService} from "../services/money-service";
import {ActivatedRoute} from "@angular/router";
import {MoneyItem} from "../money-item/money.item.model";

@Component({
  selector: 'app-money-summary',
  templateUrl: './money-summary.component.html',
  styleUrls: ['./money-summary.component.css'],
  providers: [MoneyService]
})
export class MoneySummaryComponent implements OnInit {

  totalAmount : number;
  propertyId : string;
  moneyItems : MoneyItem[];
  errorMessage : string;
  constructor(private moneyService : MoneyService, private route : ActivatedRoute  ) { }


  getTotalForAllProperties() : number {
    var total = 0;
    if (this.moneyItems==null)
      return 0;
    for (var item of this.moneyItems) {
      total = total + item.amount;
    }
    return total;
  }

  getTotalForProperty(propertyId: string) : number {
    let total : number;
    total = 0;
    if (this.moneyItems==null)
      return 0;
    for (var item of this.moneyItems) {
      if (item.propertyId==propertyId)
        total = total + item.amount;
    }
    return total;
  }

  toType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

  calcTotals()  {
    if (this.propertyId == null) {
      this.totalAmount = this.getTotalForAllProperties();
    } else {
      this.totalAmount = this.getTotalForProperty(this.propertyId);
    }
  }


  ngOnInit() {
    this.propertyId = this.route.snapshot.params['propertyId'];
    var currentMoneySummaryComponent =  this;
    this.moneyService.getAll().subscribe(
      items => this.moneyItems = items,
      error => this.errorMessage = <any>error,
    function() {
      currentMoneySummaryComponent.calcTotals();
      }
    );
  }


}
