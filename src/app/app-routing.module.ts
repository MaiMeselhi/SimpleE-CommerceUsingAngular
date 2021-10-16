import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';


import {ProductDetailsComponent} from './product-details/product-details.component'
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { AuthGuard } from './auth.guard';


import { LoginComponent } from './authmodule/login/login.component';
import { RegisterComponent } from './authmodule/register/register.component';

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
    path: 'wishList',
    component: WishListComponent,
    canActivate: [AuthGuard]
  },


  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component:RegisterComponent,
  },
  {
  path: 'cart',
  component:CartComponent,
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
