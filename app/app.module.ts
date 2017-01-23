import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { NavbarComponent }  from './navbar/navbar';
import { footerComponent }  from './footer/footer';
import { selectionbarComponent }  from './selectionbar/selectionbar';
import { homeComponent }  from './home/home';
import { AboutComponent } from './about/about';
import { contactComponent } from './contact/contact';
import { routing } from './app.routes';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  JsonpModule,
                  routing ],
  declarations: [ AppComponent,
                  NavbarComponent,
                  footerComponent,
                  selectionbarComponent,
                  homeComponent,
                  AboutComponent,
                  contactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
 }
