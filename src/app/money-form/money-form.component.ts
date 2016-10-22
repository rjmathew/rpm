import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoneyService} from "../services/money-service";
import {MoneyItem} from "../money-item/money.item.model";
import {Property} from "../property/property.model";

@Component({
  selector: 'app-money-form',
  templateUrl: './money-form.component.html',
  styleUrls: ['./money-form.component.css'],
  providers: [MoneyService]
})
export class MoneyFormComponent implements OnInit {

  model : MoneyItem;
  addedMoneyItem : MoneyItem;
  message : string;
  constructor(private route : ActivatedRoute, private  moneyService : MoneyService) { }

  ngOnInit() {
    this.model = new MoneyItem();
    this.model.propertyId = this.route.snapshot.params['propertyId'];
  }


  moneyItemAdded(newMoneyItem : MoneyItem) {
    console.log('in moneyitemAdded');
    this.addedMoneyItem = newMoneyItem;
    this.message= "Added";
    this.model = new MoneyItem();
  }

  newMoneyItem() {
    var currentMoneyItemForm = this;
    this.moneyService.addMoneyItem(this.model)
      .subscribe(
        newMoneyItem => currentMoneyItemForm.moneyItemAdded(newMoneyItem),
        error =>  this.message = <any>error);
  }

}
