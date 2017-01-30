// Import component decorator
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/app.dataService';

@Component({
  moduleId: module.id,
  templateUrl: `optimizer.html`,
  providers: [ DataService ],
})

// Component class
export class OptimizerComponent {
        items:Array<any>;
        constructor(dataService: DataService) {
          dataService.getData()
            .subscribe(data => {
              this.items = data;
            });
        }
}
