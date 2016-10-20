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
    console.log('Deleting ', itemId);
    this.moneyService.delete(itemId).subscribe(
      result => {console.log(result);this.ngOnInit();},
      err => {console.log(err)}
    );
  }

  handleError(error) {
    console.log(error);
    this.errorMessage = <any>error;
  }

  getAllEntriesForProperty(propertyId: string) : MoneyItem[] {
    var tempList = [];
    console.log('input propId ' + propertyId);
    for (var item of this.moneyItems) {
      console.log('item.propId',item.propertyId);
      if (item.propertyId==propertyId)
        tempList.push(item)
    }
    return tempList;
  }

  createItemList(items) : void {
    this.moneyItems = items;
    if (this.propertyId != null || this.propertyId=='') {
      console.log('pId is null');
      this.moneyItems = this.getAllEntriesForProperty(this.propertyId);
    } else {
      console.log('using all items');
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
