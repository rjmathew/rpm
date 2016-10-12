import {PropertyInfo} from "../property-info/property-info.model";
import {PropertyAddress} from "../property-address/property-address.model";
export class Property {
  id: number;
  address : PropertyAddress;
  name: string;
  description: string;

  info : PropertyInfo;


  constructor(pName) {
    this.name = pName;

    this.address = new PropertyAddress("address for " + pName);
    this.info = new PropertyInfo(2016);
  }
}
