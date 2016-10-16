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

  properties : Property[];
  constructor(private propertyService : PropertyService) {
    this.properties = propertyService.getAll();
      [

    ];
  }

  ngOnInit() {
  }

}
