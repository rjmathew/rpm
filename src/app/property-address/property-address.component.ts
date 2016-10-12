import { Component, OnInit } from '@angular/core';
import {PropertyAddress} from "./property-address.model";
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-property-address',
  templateUrl: './property-address.component.html',
  styleUrls: ['./property-address.component.css']
})
export class PropertyAddressComponent implements OnInit {
  @Input() inputAddress : PropertyAddress;
  constructor() { }

  ngOnInit() {
  }

}
