import {PropertyInfo} from "../property-info/property-info.model";
import {PropertyAddress} from "../property-address/property-address.model";
import {MonthlySummary} from "./monthly.-summary.model";
import {MoneyItem} from "../money-item/money.item.model";
import {debug} from "util";
export class MonthlySummaryList {
  public monthlySummaries : MonthlySummary[];

  sortedMonthlySummaries(): MonthlySummary[] {
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
    for (var item of moneyItems) {
      this.addToList(item);
    }
    this.calculateCumes();
  }

  calculateCumes() {
    for (var monthlySummaryToUpdate of this.monthlySummaries) {
      if (monthlySummaryToUpdate.cumulativeAmount == null)
        monthlySummaryToUpdate.cumulativeAmount = 0;
      for (var monthlySummaryToCheck of this.monthlySummaries) {
        if (monthlySummaryToUpdate.month >= monthlySummaryToCheck.month && monthlySummaryToUpdate.year >= monthlySummaryToCheck.year) {
          console.log('Updating Cume for existing');
          monthlySummaryToUpdate.cumulativeAmount = monthlySummaryToUpdate.cumulativeAmount + monthlySummaryToCheck.amount;
          console.log('New cume for existing is ' + monthlySummaryToUpdate.cumulativeAmount);
        }
      }

    }

  }
  addToList(moneyItem : MoneyItem) {
    var year : number;
    var month : number;
    year = moneyItem.entryDate.getFullYear();
    month = moneyItem.entryDate.getMonth();
    if (this.monthlySummaries==null) {
      this.monthlySummaries = [];
    }
    var monthlySummaryToUse : MonthlySummary;
    console.log("NEW " + year + " " + month);
    console.log(moneyItem);
    for (var monthlySummary of this.monthlySummaries) {
      console.log("EXISTING " + monthlySummary.year + " " + monthlySummary.month);
      console.log(monthlySummary);
      if (monthlySummary.month==month && monthlySummary.year == year) {
        console.log('adding to existing');
        monthlySummaryToUse = monthlySummary;
        monthlySummaryToUse.amount = monthlySummaryToUse.amount + moneyItem.amount;
      }
    }
    if (monthlySummaryToUse == null) {
      console.log('new');
      monthlySummaryToUse = new MonthlySummary();
      monthlySummaryToUse.year = year;
      monthlySummaryToUse.month = month;
      monthlySummaryToUse.amount = moneyItem.amount;
      this.monthlySummaries.push(monthlySummaryToUse)
    }

  }

}
