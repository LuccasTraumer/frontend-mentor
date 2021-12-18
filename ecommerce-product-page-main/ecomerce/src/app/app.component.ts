import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecomerce';
  cartShowing: boolean = false;

  dataCartItens: any;

  showingCart(isShow: boolean) {
    this.cartShowing = isShow;
  }

  getItensCart(event: any) {
    this.dataCartItens = event;
    console.log(event);
  }

  clearCart(event: boolean) {
    this.dataCartItens = null;
  }
}
