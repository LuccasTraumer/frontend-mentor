import { Component, OnInit } from '@angular/core';
import {Constantes} from "../../assets/constantes";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  public readonly  CONSTANTES = Constantes;
  constructor() { }

  ngOnInit(): void {
  }

}
