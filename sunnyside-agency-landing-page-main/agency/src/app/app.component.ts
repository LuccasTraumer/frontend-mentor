import { Component } from '@angular/core';
import {CardData} from "./models/card-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agency';

  // @ts-ignore
  arrayData = Array<CardData>();

  constructor() {
    this.arrayData = [
      {
        header: 'Transform your brand',
        description: 'We are a full-service creative agency specializing in helping brands grow fast.' +
          'Engage your clients through compelling visuals that do most of the marketing for you.',
        textLink: 'Learn more',
        link: '#'
      },

    ];
  }

}
