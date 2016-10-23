import { Component, OnInit } from '@angular/core';
import {MoneyService} from "../services/money-service";
import {ActivatedRoute} from "@angular/router";
import {MoneyItem} from "../money-item/money.item.model";

@Component({
  selector: 'app-money-item-list',
  templateUrl: './money-item-list.component.html',
  styleUrls: ['./money-item-list.component.css']
})
export class MoneyItemListComponent implements OnInit {

  propertyId : string;
  public moneyItems : MoneyItem[];
  public errorMessage : string;

  constructor(private moneyService : MoneyService, private route : ActivatedRoute ) { }

  deleteMoneyItem(itemId) {
    this.moneyService.delete(itemId).subscribe(
      result => {console.log(result);this.ngOnInit();},
      err => {console.log(err)}
    );
  }

  changeItemType(item : MoneyItem) {
    item.amount = item.amount * -1;
    this.moneyService.updateMoneyItem(item).subscribe(
      x => item = x,
      err => this.handleError(err));
  }

  handleError(error) {
    console.log(error);
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

  createItemList(items) : void {
    this.moneyItems = items;
    if (this.propertyId != null || this.propertyId=='') {
      this.moneyItems = this.getAllEntriesForProperty(this.propertyId);
    }
  }

  ngOnInit() {
    var currentMoneySummaryByMonthComponent = this;
    this.propertyId = this.route.snapshot.params['propertyId'];
    this.moneyService.getAll().subscribe(
      items => currentMoneySummaryByMonthComponent.createItemList(items),
      error => currentMoneySummaryByMonthComponent.handleError(error));
  }

}
