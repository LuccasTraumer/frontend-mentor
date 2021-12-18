import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ModalCartComponent} from "./modal-cart/modal-cart.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: 'create',
    component: ModalCartComponent
  },
  {
    path: 'comp',
    component: AppComponent,
  },
  {
    path: '**',
    redirectTo: 'comp'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
