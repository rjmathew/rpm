import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {Property} from "./property.model";
import {ActivatedRoute} from "@angular/router";
import {PropertyService} from "../services/property.service";

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
  providers: [PropertyService]
})
export class PropertyComponent implements OnInit {

  id : number;

  @Input() inputProperty : Property;
  constructor(private route : ActivatedRoute, private propertyService : PropertyService) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['propertyId'];
    this.inputProperty = this.propertyService.getPropertyById(this.id);
  }

}
