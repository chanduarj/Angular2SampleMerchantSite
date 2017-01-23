// Imports

import { Routes } from '@angular/router';

import { AboutComponent }    from '../about/about';
import { SimulatorComponent }    from './simulator';
import { OptimizerComponent }    from './optimizer';

// Route Configuration
export const lostBasketOptimizerRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'simulator', component: SimulatorComponent },
  { path: 'optimizer', component: OptimizerComponent }
];
