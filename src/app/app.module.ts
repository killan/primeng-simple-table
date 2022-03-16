import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { TableModule } from 'primeng-lts/table'
import { DropdownModule } from 'primeng-lts/dropdown';

import { AppComponent } from './app.component';
import { SimpleTableComponent } from './components/simple-table/simple-table.component';
import { ListComponent } from './components/cell-components/list/list.component';

import { CellComponentsHostDirective } from './directives/cell-components-host';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

    SimpleTableComponent,
    ListComponent,

    CellComponentsHostDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    TableModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
