import { Injectable } from '@angular/core';
import {MoneyItem} from "../money-item/money.item.model";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class MoneyService {
  list : MoneyItem[];
  // list = [
  //   new MoneyItem("5","1",1000,"rent for july",new Date("2016-07-02")),
  //   new MoneyItem("4","1",2000,"rent for aug",new Date("2016-08-02")),
  //   new MoneyItem("1","1",1345,"rent for oct",new Date("2016-10-02")),
  //   new MoneyItem("2","1",-1500,"repair" ,new Date("2016-09-15")),
  //   new MoneyItem("3","2",1050,"rent for oct",new Date("2016-10-02"))
  //   ]

  moneyItemsUrl : string;
  constructor(public http : Http) {
    this.moneyItemsUrl = 'http://localhost:8080/moneyItems';
  }


  getAll()  : Observable<MoneyItem[]> {
    let moneyService : MoneyService;
    moneyService = this;
    return this.http.get(this.moneyItemsUrl)
      .map(moneyService.extractData)
      .catch(this.handleError);
  }

  ingestMoneyItems(items: MoneyItem[]) : MoneyItem[]{
    var returnList = [];
    for (var temp of items) {
      let item : MoneyItem;
      item = new MoneyItem(temp._id, temp.propertyId, parseInt(temp.amount.toString(), 10), temp.description, new Date(temp.transactionDate.toString()));
      returnList.push(item);
    }
    return returnList;
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  private extractData(res: Response) {
    var list = res.json();
    if (list == null)
      list=[];
    console.log(this);
    var returnList = [];
    for (var temp of list) {
      let item : MoneyItem;
      console.log(item);
      item = new MoneyItem(temp._id, temp.propertyId, parseInt(temp.amount.toString(), 10), temp.description, new Date(temp.transactionDate.toString()));
      returnList.push(item);
    }
    return returnList;
  }




  addMoneyItem(model: MoneyItem) {
    return this.http.post(this.moneyItemsUrl,model).
    map(function(res:Response) {return res;})
      .catch(this.handleError);
  }

  delete(itemId: string) {
    return this.http.delete(`${this.moneyItemsUrl}/${itemId}`)
      .map((res:Response) => {console.log('Deleted');})
      .catch(this.handleError);
  }
}
