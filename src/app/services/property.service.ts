import { Injectable } from '@angular/core';
import {Property} from "../property/property.model";

@Injectable()
export class PropertyService {

  constructor() { }
  list = [
  new Property(1, "prop1", 2016, "First Prop", "4206 White Ln"), new Property(2, "prop2", 2017, "Second Prop", "4208 White Ln")];

  getAll()  : Property[] {

    return this.list;
  }

  getPropertyById(pId: number) : Property {
    for (var item of this.list) {
      if (item.id==pId)
        return item;
    }
  }
}
