import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BackgroundDataComponent } from './background-data/background-data.component';
import { MainContentComponent } from './main-content/main-content.component';
import { CardModule } from './card/card.module';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundDataComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
