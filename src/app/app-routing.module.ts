import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProductDetailsComponent} from './product-details/product-details.component'
const routes: Routes = [
  {
    path: '',
    redirectTo :'products',
    pathMatch : 'full',
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'login',
    component:LoginComponent,
  },
  {
    path: 'register',
    component:RegisterComponent,
  },
  {
    path: 'product/:id',
    component:ProductDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
