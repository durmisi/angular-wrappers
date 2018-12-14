import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SelectWrapperModule } from 'select-wrapper';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SelectWrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
