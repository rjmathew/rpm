import { Component, OnInit } from '@angular/core';
import {MoneyService} from "../services/money-service";
import {ActivatedRoute} from "@angular/router";
import {MonthlySummaryList} from "./monthly.-summary-list.model";
import {MoneyItem} from "../money-item/money.item.model";
import {MoneySummaryComponent} from "../money-summary/money-summary.component";

@Component({
  selector: 'app-money-summary-by-month',
  templateUrl: './money-summary-by-month.component.html',
  styleUrls: ['./money-summary-by-month.component.css'],
  providers: [MoneyService]
})
export class MoneySummaryByMonthComponent implements OnInit {

  monthlySummaryList :  MonthlySummaryList;
  propertyId : string;
  constructor(private moneyService : MoneyService, private route : ActivatedRoute  ) { }

  ngOnInit() {
    this.propertyId = this.route.snapshot.params['propertyId'];
    var moneyItems : MoneyItem[];
    if (this.propertyId == null)
      moneyItems = this.moneyService.getAll();
    else
      moneyItems = this.moneyService.getAllEntriesForProperty(this.propertyId);
      this.monthlySummaryList = new MonthlySummaryList(moneyItems);
  }

}
