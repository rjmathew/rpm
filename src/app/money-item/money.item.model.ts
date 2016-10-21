import {PropertyInfo} from "../property-info/property-info.model";
import {PropertyAddress} from "../property-address/property-address.model";
export class MoneyItem {
  _id: string;
  propertyId : string;
  description : string;
  amount : number;
  transactionDate : Date;


  constructor(pId? : string, pPropertyId?: string, pAmount? : number, pDescription? : string, pTransactionDate? : Date) {
    this._id = pId;
    this.amount = pAmount;
    this.description = pDescription;
    this.propertyId = pPropertyId;
    this.transactionDate = pTransactionDate;
  }

}
