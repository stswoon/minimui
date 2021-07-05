import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FactoryComponent} from './factory.component';
import {AppModule} from "../app/app.module";

@NgModule({
  declarations: [FactoryComponent],
  imports: [BrowserModule, AppModule],
  providers: [],
  bootstrap: [FactoryComponent]
})
export class FactoryModule {
}
