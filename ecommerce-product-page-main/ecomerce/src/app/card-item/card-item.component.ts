import { Component, OnInit } from '@angular/core';
import {Constantes} from "../../assets/constantes";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  public readonly  CONSTANTES = Constantes;
  public cardItem: CardItem = new CardItem();
  constructor() {
    this.cardItem.company = 'Sneaker Company';
    this.cardItem.productName = 'Fall Limited Edition Sneakers';
    this.cardItem.description = 'These low-profile sneakers are your perfect casual wear companion. Featuring a ' +
      'durable rubber outer sole, they’ll withstand everything the weather can offer.';
    this.cardItem.price = 125.00;
    this.cardItem.descount = 50;
    this.cardItem.oldPrice = 250.00;
  }

  ngOnInit(): void {
  }
}

export class CardItem {
  public company: string = '';
  public productName: string = '';
  public description: string = '';
  public price: number = 0;
  public descount: number = 0;
  public oldPrice: number = 0;

}
