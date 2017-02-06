import { Component } from '@angular/core';

export interface Links{
    path:string;
    displayName:string;
}

export interface Application{
    title:string;
    owner:string;
    mailTo:string;
}

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
})

export class AppComponent  {

        public application:Application = {title : "Lost Basket Optimizer",
                                          owner : "Mageshwaran N",
                                          mailTo : "get.mageshwaran@gmail.com"};

        public parentLinks:Links[] = [
        {path: '/home', displayName:'Home'},
        {path: '/about', displayName:'About'},
        {path: '/contact', displayName:'Contact'}
        ];

        public selectionLinks:Links[] = [
        {path: '/optimizer', displayName:'Optimizer'},
        {path: '/simulator', displayName:'Simulator'}
        ];
}
