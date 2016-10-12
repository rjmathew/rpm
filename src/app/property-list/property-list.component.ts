import { Component, OnInit } from '@angular/core';
import {Property} from "../property/property.model";

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties : Property[];
  constructor() {
    this.properties = [
      new Property("prop1"), new Property("prop2")
    ];
  }

  ngOnInit() {
  }

}
