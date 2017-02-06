import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'selection-bar',
  templateUrl: `selectionbar.html`,
})
export class selectionbarComponent  {
      @Input('selections') selectionLinks:Array <Object>;
 }
