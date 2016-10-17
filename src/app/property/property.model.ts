import {PropertyInfo} from "../property-info/property-info.model";
import {PropertyAddress} from "../property-address/property-address.model";
export class Property {
  _id: string;
  address : PropertyAddress;
  name: string;
  description: string;

  info : PropertyInfo;

  constructor(pId? : string, pName?: string, pYearPurchased? : number, pDescription? : string, pAddress? : string) {
    this.name = pName;
    this._id = pId;

    this.address = new PropertyAddress(pAddress);
    this.info = new PropertyInfo(pYearPurchased, pDescription);
  }
}
