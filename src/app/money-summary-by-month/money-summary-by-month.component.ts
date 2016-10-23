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
  public moneyItems : MoneyItem[];
  public errorMessage : string;

  constructor(private moneyService : MoneyService, private route : ActivatedRoute  ) {
    this.monthlySummaryList = new MonthlySummaryList([]);
  }

  createMonthlySummaryList(items) : void {
    this.moneyItems = items;
    if (this.propertyId != null || this.propertyId=='') {
      this.moneyItems = this.getAllEntriesForProperty(this.propertyId);
    }
    this.monthlySummaryList = new MonthlySummaryList(this.moneyItems);
  }

  handleError(error) {
    this.errorMessage = <any>error;

  }

  getAllEntriesForProperty(propertyId: string) : MoneyItem[] {
    var tempList = [];
    for (var item of this.moneyItems) {
      if (item.propertyId==propertyId)
        tempList.push(item)
    }
    return tempList;
  }

  ngOnInit() {
    var currentMoneySummaryByMonthComponent = this;
    this.propertyId = this.route.snapshot.params['propertyId'];
      this.moneyService.getAll().subscribe(
        items => currentMoneySummaryByMonthComponent.createMonthlySummaryList(items),
        error => currentMoneySummaryByMonthComponent.handleError(error));

  }

}
