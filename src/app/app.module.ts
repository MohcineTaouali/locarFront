import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IsotopeModule } from 'ngx-isotope';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IsotopeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
