import { Component, Input, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-table',
  templateUrl: `app.table.html`,
})
export class TableComponent  {
            @Input('data') data:Array [] ;
            //@Output() ;
 }
