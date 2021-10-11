import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
const routes: Routes = [
  {
    path: '',
    component:ProductListComponent,
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
