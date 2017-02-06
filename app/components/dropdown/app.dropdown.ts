import { Component, Input, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-dropdown',
  templateUrl: `app.dropdown.html`,
})
export class DropdownComponent  {
            @Input('type') localType:String ;
            //@Output() ;
 }
