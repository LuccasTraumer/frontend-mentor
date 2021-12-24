import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { Constantes } from "../../assets/constantes";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Output()
  isShowCart = new EventEmitter<boolean>();

  private width = window.screen.width;

  @Input()
  dataCart: any;

  private cartIsShowing: boolean = false;

  public readonly CONSTANTES = Constantes;
  menuIsOpen: boolean =  false;
  public hamburguerMenuIsShowing: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  showHamburguerMenu() {
    return this.hamburguerMenuIsShowing;
  }

  changeHamburguerMenu() {
    this.menuIsOpen = !this.menuIsOpen;
    this.hamburguerMenuIsShowing = !this.hamburguerMenuIsShowing;
  }

  showCart() {
    this.cartIsShowing = !this.cartIsShowing;
    console.log(this.dataCart.numItens);
    return this.isShowCart.emit(this.cartIsShowing);
  }

  getWidth() {

    console.log(this.width)
    return this.width > 426;
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}
