import {Component, Input, OnInit} from '@angular/core';
import {Depoiment} from "../models/depoiment";

@Component({
  selector: 'app-depoiment',
  templateUrl: './depoiment.component.html',
  styleUrls: ['./depoiment.component.scss']
})
export class DepoimentComponent implements OnInit {

  @Input()
  depoiment: Depoiment = new Depoiment();

  constructor() { }

  ngOnInit(): void {
  }

}
