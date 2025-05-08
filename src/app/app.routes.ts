import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  // },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)
  }
];
