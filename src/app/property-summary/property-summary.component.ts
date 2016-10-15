import { Component, OnInit } from '@angular/core';
import {Property} from "../property/property.model";
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-property-summary',
  templateUrl: './property-summary.component.html',
  styleUrls: ['./property-summary.component.css']
})
export class PropertySummaryComponent implements OnInit {
  @Input() inputProperty : Property;
  constructor() { }

  ngOnInit() {
  }

}
