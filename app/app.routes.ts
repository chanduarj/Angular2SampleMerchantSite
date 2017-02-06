// Imports

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { aboutRoutes }    from './components/about/about.route';
import { contactRoutes }    from './components/contact/contact.route';
import { homeRoutes }    from './components/home/home.route';
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
