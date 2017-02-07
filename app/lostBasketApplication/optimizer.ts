// Import component decorator
import { Component, OnInit } from '@angular/core';
import { DataService } from '../components/services/app.dataService';

@Component({
  moduleId: module.id,
  templateUrl: `optimizer.html`,
})

// Component class
export class OptimizerComponent {
        optimizerData:Array<any>;
        data: String;
        constructor(dataService: DataService) {
          dataService.getData()
            .subscribe(innerData => {
              this.optimizerData = innerData;
            });

            this.data = "I/P and O/P";
        }
}
