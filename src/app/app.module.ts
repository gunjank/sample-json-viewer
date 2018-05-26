import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxJsonViewerModule } from "ngx-json-viewer";
import { FormsModule } from '@angular/forms';
import {PrettyJsonModule} from 'angular2-prettyjson';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatRadioModule, MatToolbarModule} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxJsonViewerModule,
    FormsModule,
    PrettyJsonModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatRadioModule,
    MatToolbarModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
