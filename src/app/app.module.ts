import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TableModule } from 'primeng-lts/table'

import { AppComponent } from './app.component';
import { SimpleTableComponent } from './components/simple-table/simple-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleTableComponent
  ],
  imports: [
    BrowserModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
