import {Component, OnInit, EventEmitter} from '@angular/core';
import {Property} from "../property/property.model";
import {PropertyAddress} from "../property-address/property-address.model";
import {PropertyInfo} from "../property-info/property-info.model";
import {PropertyService} from "../services/property.service";

@Component({
  selector: 'app-property-form',
  outputs : ['newPropertyAdded'],
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css'],
  providers: [PropertyService]
})
export class PropertyFormComponent implements OnInit {

  model : Property;
  constructor(private propertyService: PropertyService ) {
    this.model = new Property();
    this.model.info = new PropertyInfo();
    console.log('here');
    this.model.address = new PropertyAddress();
    console.log(this.model);
  }

  ngOnInit() {

  }

  newProperty() {
    console.log('submitted');
    this.propertyService.addProperty(this.model);
  }

}
