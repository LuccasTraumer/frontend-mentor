import {Component, HostBinding, OnInit} from '@angular/core';
import {Constantes} from "../../assets/constantes";

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {
  public CONSTANTES = Constantes;
  private index = 0;
  public images = [
    this.CONSTANTES.IMAGE_PRODUCT_1, this.CONSTANTES.IMAGE_PRODUCT_2,
    this.CONSTANTES.IMAGE_PRODUCT_3, this.CONSTANTES.IMAGE_PRODUCT_4
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  nextImage() {
    this.index++;
    if (this.index > this.images.length -1) {
      this.index = 0;
    }
  }

  preveiusImage() {
    this.index--;
    if (this.index < 0) {
      this.index = this.images.length -1;
    }
  }

  showImageProduct() {
    return this.images[this.index];
  }

  changeIndex(index: number) {
    this.index = index;
  }

  getIndex() {
    return this.index;
  }
}
