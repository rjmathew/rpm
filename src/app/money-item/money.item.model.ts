import {PropertyInfo} from "../property-info/property-info.model";
import {PropertyAddress} from "../property-address/property-address.model";
export class MoneyItem {
  id: number;
  propertyId : number;
  description : string;
  amount : number;
  entryDate : Date;


  constructor(pId : number, pPropertyId: number, pAmount : number, pDescription : string, pEntryDate : Date) {
    this.id = pId;
    this.amount = pAmount;
    this.description = pDescription;
    this.propertyId = pPropertyId;
    this.entryDate = pEntryDate;
  }

}
