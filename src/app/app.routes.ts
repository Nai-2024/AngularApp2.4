


import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) },
  { path: 'menu', loadComponent: () => import('./menu/menu.component').then(m => m.MenuComponent) },
 { 
  path: 'custom-menu', 
  loadComponent: () => import('./custom-menu/custom-menu.component').then(m => m.CustomMenuComponent),
},

  { path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }// wildcard route
  //{ path: '**', redirectTo: '' }
];

