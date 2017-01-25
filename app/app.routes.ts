// Imports

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { aboutRoutes }    from './about/about.route';
import { contactRoutes }    from './contact/contact.route';
import { homeRoutes }    from './home/home.route';
import { lostBasketOptimizerRoutes }    from './lostBasketApplication/lostBasket.route';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  ...homeRoutes,
  ...aboutRoutes,
  ...contactRoutes,
  ...lostBasketOptimizerRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
