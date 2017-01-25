import { Component, Input } from '@angular/core';

@Component({
  selector: 'selection-bar',
  templateUrl: `./app/selectionbar/selectionbar.html`,
})
export class selectionbarComponent  {
      @Input('selections') selectionLinks:Array <Object>;
 }
