// Imports

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { aboutRoutes }    from './about/about.route';
import { contactRoutes }    from './contact/contact.route';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  }
  ...aboutRoutes
  ...contactRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
