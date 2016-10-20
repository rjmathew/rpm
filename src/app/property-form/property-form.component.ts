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
  addedProperty : Property;
  message : string;


  constructor(private propertyService: PropertyService ) {
    this.model = new Property();
    this.model.info = new PropertyInfo();
    this.model.address = new PropertyAddress();
  }

  ngOnInit() {

  }

  propertyAdded(newProperty : Property) {
    this.message = "Property Added";
    console.log('prop added');
    this.addedProperty = newProperty;
  }

  newProperty() {
    var currentPropertyFormComponent = this;
    this.propertyService.addProperty(this.model)
      .subscribe(
        newProperty => currentPropertyFormComponent.propertyAdded(newProperty),
        error =>  this.message = <any>error);
  }

}
