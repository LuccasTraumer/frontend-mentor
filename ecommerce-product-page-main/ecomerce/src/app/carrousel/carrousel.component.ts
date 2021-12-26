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
  private isClicked = false;
  public images = [
    this.CONSTANTES.IMAGE_PRODUCT_1, this.CONSTANTES.IMAGE_PRODUCT_2,
    this.CONSTANTES.IMAGE_PRODUCT_3, this.CONSTANTES.IMAGE_PRODUCT_4
  ];

  constructor() {
  }

  ngOnInit(): void {
    setInterval(() => {
      if (!this.isClicked)
        this.nextImage();
    }, 4000);
  }

  nextImage() {
    this.isClicked = true;
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

    setInterval(() => this.isClicked = false, 5000);
  }

  getIndex() {
    return this.index;
  }
}
