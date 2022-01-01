import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HamburguerMenuComponent } from './hamburguer-menu/hamburguer-menu.component';
import { CardComponent } from './card/card.component';
import {CommonModule} from "@angular/common";
import { DepoimentComponent } from './depoiment/depoiment.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HamburguerMenuComponent,
    CardComponent,
    DepoimentComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        CommonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
