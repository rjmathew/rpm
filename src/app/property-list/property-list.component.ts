import { Component, OnInit } from '@angular/core';
import {Property} from "../property/property.model";
import {PropertyService} from "../services/property.service";

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
  providers: [PropertyService]
})
export class PropertyListComponent implements OnInit {
  errorMessage: string;
  properties : Property[];
  constructor(private propertyService : PropertyService) {

  }

  getAll() {
      this.propertyService.getAll()
        .subscribe(
          properties => this.properties = properties,
          error =>  this.errorMessage = <any>error);

  }


  ngOnInit() {
   this.getAll();

  }

}
