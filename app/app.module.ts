import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { NavbarComponent }  from './navbar/navbar';
import { footerComponent }  from './footer/footer';
import { selectionbarComponent }  from './selectionbar/selectionbar';
import { homeComponent }  from './home/home';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NavbarComponent, footerComponent, selectionbarComponent, homeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
 }
