import { Component, OnInit } from '@angular/core';
import {MoneyItem} from "./money.item.model";
import {ActivatedRoute} from "@angular/router";
import {MoneyService} from "../services/money-service";

@Component({
  selector: 'app-money-item',
  templateUrl: './money-item.component.html',
  styleUrls: ['./money-item.component.css']
})
export class MoneyItemComponent implements OnInit {



  constructor() { }

  ngOnInit() {

  }

}
