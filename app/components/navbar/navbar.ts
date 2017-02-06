import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'nav-bar',
  templateUrl: `navbar.html`,
})
export class NavbarComponent  {
            @Input('links') renderLinks:Array <Object>;
            @Input('application-details') application:Object;
 }
