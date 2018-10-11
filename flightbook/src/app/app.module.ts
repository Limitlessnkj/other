import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { TicketList }  from './app.ticketlist';
import {HttpModule} from '@angular/http';
import { SearchPipe }  from './filter';
import { SortPipe } from './sortfilter';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule],
  declarations: [ AppComponent, TicketList, SearchPipe, SortPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
