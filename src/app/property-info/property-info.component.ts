import { Component, OnInit } from '@angular/core';
import {PropertyInfo} from "./property-info.model";
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-property-info',
  templateUrl: './property-info.component.html',
  styleUrls: ['./property-info.component.css']
})
export class PropertyInfoComponent implements OnInit {
  @Input() inputInfo : PropertyInfo;
  constructor() {
  }

  ngOnInit() {
  }

}
