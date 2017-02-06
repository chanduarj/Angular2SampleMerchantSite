import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-footer',
  templateUrl: `footer.html`,
})
export class footerComponent  {
  @Input('application-details') application:Object;
 }
