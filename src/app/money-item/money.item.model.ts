import {PropertyInfo} from "../property-info/property-info.model";
import {PropertyAddress} from "../property-address/property-address.model";
export class MoneyItem {
  id: string;
  propertyId : string;
  description : string;
  amount : number;
  transactionDate : Date;


  constructor(pId? : string, pPropertyId?: string, pAmount? : number, pDescription? : string, pEntryDate? : Date) {
    this.id = pId;
    this.amount = pAmount;
    this.description = pDescription;
    this.propertyId = pPropertyId;
    this.transactionDate = pEntryDate;
  }

}
