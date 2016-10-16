import { Component, OnInit } from '@angular/core';
import {MoneyService} from "../services/money-service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-money-summary',
  templateUrl: './money-summary.component.html',
  styleUrls: ['./money-summary.component.css'],
  providers: [MoneyService]
})
export class MoneySummaryComponent implements OnInit {

  totalAmount : number;
  propertyId : number;
  constructor(private moneyService : MoneyService, private route : ActivatedRoute  ) { }

  ngOnInit() {
    this.propertyId = this.route.snapshot.params['propertyId'];
    if (this.propertyId == null)
      this.totalAmount = this.moneyService.getTotalForAllProperties();
    else
      this.totalAmount = this.moneyService.getTotalForProperty(this.propertyId);
  }

}
