import {Component, Input, OnInit} from '@angular/core';
import {CardData} from "../models/card-data";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  dataCard: CardData = new CardData();

  constructor() { }

  ngOnInit(): void {
  }

}
