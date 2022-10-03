import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartListComponent} from "./cart-list/cart-list.component";
import {AuthGuard} from "../security/auth.guard";


const routes: Routes = [
  {
    path: 'cart/list',
    component: CartListComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
