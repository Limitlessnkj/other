import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { MobileComponent } from "./app.mobilecomponent";

@NgModule( {
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, MobileComponent],
    bootstrap: [AppComponent]
} )
//App module class
export class AppModule { }
