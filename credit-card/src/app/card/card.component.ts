import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public expireDate = { mounth: 'MM', year: 'YY' };
  public name = 'FULL NAME';
  public numberCard?= '#### #### #### ####';

  constructor() {
    // this.numberCard = '1234 5678 8901 2345';
    // this.name = 'Lucas Silva de Jesus';
    // this.expireDate = { mounth: '10', year: '12' };
  }

  ngOnInit(): void {
  }

}
