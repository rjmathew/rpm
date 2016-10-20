import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoneyService} from "../services/money-service";
import {MoneyItem} from "../money-item/money.item.model";

@Component({
  selector: 'app-money-form',
  templateUrl: './money-form.component.html',
  styleUrls: ['./money-form.component.css'],
  providers: [MoneyService]
})
export class MoneyFormComponent implements OnInit {

  model : MoneyItem;
  addedMoneyItem : MoneyItem;
  errorMessage : string;
  constructor(private route : ActivatedRoute, private  moneyService : MoneyService) { }

  ngOnInit() {
    this.model = new MoneyItem();
    this.model.propertyId = this.route.snapshot.params['propertyId'];
  }


  moneyItemAdded() {
  }

  newMoneyItem() {
    var currentMoneyItemForm = this;
    this.moneyService.addMoneyItem(this.model)
      .subscribe(
        newProperty => this.addedMoneyItem = newProperty,
        error =>  this.errorMessage = <any>error,
        currentMoneyItemForm.moneyItemAdded);
  }

}
