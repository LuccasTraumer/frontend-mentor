import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HamburguerMenuComponent } from './hamburguer-menu/hamburguer-menu.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import {CommonModule} from "@angular/common";
import { ModalCartComponent } from './modal-cart/modal-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HamburguerMenuComponent,
    CardItemComponent,
    CarrouselComponent,
    ModalCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CommonModule,
    CommonModule,
    CommonModule,
    CommonModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
