import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListItemsComponent } from './items/list-items/list-items.component';
import { ItemsComponent } from './items/items.component';
import { SuppliersComponent } from './suppliers/suppliers.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'items/list-items',
    component: ListItemsComponent
  },
  {
    path: 'items',
    component: ItemsComponent
  },
  {
    path: 'suppliers',
    component: SuppliersComponent
  }
];
