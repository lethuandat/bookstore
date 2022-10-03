import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaymentComponent} from "./payment/payment.component";
import {AuthGuard} from "../security/auth.guard";


const routes: Routes = [
  {
    path: 'payment',
    component: PaymentComponent,
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
export class PaymentRoutingModule { }
