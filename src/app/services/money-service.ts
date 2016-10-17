import { Injectable } from '@angular/core';
import {MoneyItem} from "../money-item/money.item.model";

@Injectable()
export class MoneyService {
  list = [
    new MoneyItem("5","1",1000,"rent for july",new Date("2016-07-02")),
    new MoneyItem("4","1",2000,"rent for aug",new Date("2016-08-02")),
    new MoneyItem("1","1",1345,"rent for oct",new Date("2016-10-02")),
    new MoneyItem("2","1",-1500,"repair" ,new Date("2016-09-15")),
    new MoneyItem("3","2",1050,"rent for oct",new Date("2016-10-02"))
    ]

  constructor() { }

  getAll()  : MoneyItem[] {

    return this.list;
  }

  getTotalForAllProperties() : number {
    var total = 0;
    for (var item of this.list) {
      total = total + item.amount;
    }
    return total;
  }

  getTotalForProperty(propertyId: string) : number {
    var total = 0;
    for (var item of this.list) {
      if (item.propertyId==propertyId)
        total = total + item.amount;
    }
    return total;
  }

  getAllEntriesForProperty(propertyId: string) : MoneyItem[] {
    var tempList = [];
    for (var item of this.list) {
      if (item.propertyId==propertyId)
        tempList.push(item)
    }
    return tempList;
  }
}
