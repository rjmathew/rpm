import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {Property} from "./property.model";
import {ActivatedRoute} from "@angular/router";
import {PropertyService} from "../services/property.service";
import {PropertyAddress} from "../property-address/property-address.model";
import {PropertyInfo} from "../property-info/property-info.model";

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
  providers: [PropertyService]
})
export class PropertyComponent implements OnInit {

  _id : string;
  errorMessage : string;

  inputProperty : Property;
  constructor(private route : ActivatedRoute, private propertyService : PropertyService) { }

  ngOnInit() {
    this.inputProperty = new Property();
    this._id = this.route.snapshot.params['propertyId'];
    this.propertyService.getPropertyById(this._id)
      .subscribe(
        property => this.inputProperty = property,
        error =>  this.errorMessage = <any>error);

  }

}
