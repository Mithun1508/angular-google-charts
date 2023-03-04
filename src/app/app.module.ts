import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,GoogleChartsModule],
  declarations: [ AppComponent, ChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
