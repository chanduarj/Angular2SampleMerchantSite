import { Component, Input } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: `./app/navbar/navbar.html`,
})
export class NavbarComponent  {
            @Input('links') renderLinks:Array <Object>;
            @Input('application-details') application:Object;
 }
