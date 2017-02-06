import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { NavbarComponent }  from './components/navbar/navbar';
import { footerComponent }  from './components/footer/footer';
import { selectionbarComponent }  from './components/selectionbar/selectionbar';
import { DataContainerComponent }  from './components/dataContainer/dataContainer';
import { homeComponent }  from './components/home/home';
import { AboutComponent } from './components/about/about';
import { contactComponent } from './components/contact/contact';
import { OptimizerComponent } from './lostBasketApplication/optimizer';
import { SimulatorComponent } from './lostBasketApplication/simulator';
import { routing } from './app.routes';
import { DropdownComponent } from './components/dropdown/app.dropdown';
import { TableComponent } from './components/table/app.table';

import { DataService } from './components/services/app.dataService';

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
                  DataContainerComponent,
                  homeComponent,
                  AboutComponent,
                  contactComponent,
                  OptimizerComponent,
                  SimulatorComponent,
                  DropdownComponent,
                  TableComponent ],
  providers: [ DataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
 }
