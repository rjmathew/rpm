import {PropertyInfo} from "../property-info/property-info.model";
import {PropertyAddress} from "../property-address/property-address.model";
import {MonthlySummary} from "./monthly.-summary.model";
import {MoneyItem} from "../money-item/money.item.model";
import {debug} from "util";
export class MonthlySummaryList {
  public monthlySummaries : MonthlySummary[];

  sortedMonthlySummaries(): MonthlySummary[] {
    if (this.monthlySummaries==null)
      return null;
      return this.monthlySummaries.sort((a: MonthlySummary, b: MonthlySummary) =>
      {
        if (b.year > a.year)
          return 1;
        else {
          if (b.year==a.year && b.month > a.month) {
            return 1;
          }
        }
        return -1;
    });
  }

  constructor(moneyItems : MoneyItem[]) {
    if (moneyItems==null)
      moneyItems=[];
    for (var item of moneyItems) {
      this.addToList(item);
    }
    this.calculateCumes();
  }

  calculateCumes() {
    if (this.monthlySummaries==null)
      return null;
    for (var monthlySummaryToUpdate of this.monthlySummaries) {
      if (monthlySummaryToUpdate.cumulativeAmount == null)
        monthlySummaryToUpdate.cumulativeAmount = 0;
      for (var monthlySummaryToCheck of this.monthlySummaries) {
        if (monthlySummaryToUpdate.month >= monthlySummaryToCheck.month && monthlySummaryToUpdate.year >= monthlySummaryToCheck.year) {
          monthlySummaryToUpdate.cumulativeAmount = monthlySummaryToUpdate.cumulativeAmount + monthlySummaryToCheck.amount;
        }
      }

    }

  }
  addToList(moneyItem : MoneyItem) {
    var year : number;
    var month : number;
    console.log(moneyItem);
    year = moneyItem.transactionDate.getFullYear();
    month = moneyItem.transactionDate.getMonth() + 1;
    if (this.monthlySummaries==null) {
      this.monthlySummaries = [];
    }
    var monthlySummaryToUse : MonthlySummary;
    for (var monthlySummary of this.monthlySummaries) {
      if (monthlySummary.month==month && monthlySummary.year == year) {
        monthlySummaryToUse = monthlySummary;
        monthlySummaryToUse.amount = monthlySummaryToUse.amount + moneyItem.amount;
      }
    }
    if (monthlySummaryToUse == null) {
      monthlySummaryToUse = new MonthlySummary();
      monthlySummaryToUse.year = year;
      monthlySummaryToUse.month = month;
      monthlySummaryToUse.amount = moneyItem.amount;
      this.monthlySummaries.push(monthlySummaryToUse)
    }

  }

}
