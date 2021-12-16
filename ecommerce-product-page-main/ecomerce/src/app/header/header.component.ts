import { Component, OnInit } from '@angular/core';
import { Constantes } from "../../assets/constantes";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
}
