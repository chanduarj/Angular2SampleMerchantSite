import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-footer',
  templateUrl: `./app/footer/footer.html`,
})
export class footerComponent  {
  @Input('application-details') application:Object;
 }
