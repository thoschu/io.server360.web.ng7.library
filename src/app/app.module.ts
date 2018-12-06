import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {PsImageDisclaimerNg7LibComponent, PsImageDisclaimerNg7LibModule} from 'ps-image-disclaimer-ng7-lib';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PsImageDisclaimerNg7LibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
