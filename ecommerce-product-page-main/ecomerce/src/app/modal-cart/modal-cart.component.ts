import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Constantes} from "../../assets/constantes";

@Component({
  selector: 'app-modal-cart',
  templateUrl: './modal-cart.component.html',
  styleUrls: ['./modal-cart.component.scss']
})
export class ModalCartComponent implements OnChanges {
  public readonly CONSTANTES = Constantes;

  @Input()
  itemCart: any;

  @Input()
  dataCart: any;

  @Output()
  clearCart = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dataCart) {
      this.itemCart = new Item();
      this.itemCart.quantityItem = this.dataCart.numItens;
      this.itemCart.priceItem = JSON.parse(this.dataCart.item).price;
      this.itemCart.imagePath = JSON.parse(this.dataCart.item).imagePath;
      this.itemCart.description = JSON.parse(this.dataCart.item).description;
      console.log(JSON.parse(this.dataCart.item).imagePath);
    }
    console.log(this.dataCart.numItens);
  }

  cleanCart() {
    this.itemCart = new Item();
    this.clearCart.emit(true);
  }

}

export class Item {
  imagePath: string = '';
  description: string = '';
  priceItem: number = 0;
  quantityItem: number = 0;
}
