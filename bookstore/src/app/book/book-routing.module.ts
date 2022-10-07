import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from "./book-list/book-list.component";
import {BookCreateComponent} from "./book-create/book-create.component";
import {BookUpdateComponent} from "./book-update/book-update.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {AuthGuard} from "../security/auth.guard";
import {CartListComponent} from "../cart/cart-list/cart-list.component";
import {BookByCategoryComponent} from "./book-by-category/book-by-category.component";


const routes: Routes = [
  {
    path: 'book/list',
    component: BookListComponent
  },
  {
    path: 'category/:categoryId',
    component: BookByCategoryComponent
  },
  {
    path: 'book/create',
    canActivate: [AuthGuard],
    component: BookCreateComponent,
    data: {
      roles: ['ROLE_ADMIN']
    }
  },
  {
    path: 'book/edit/:id',
    canActivate: [AuthGuard],
    component: BookUpdateComponent,
    data: {
      roles: ['ROLE_ADMIN']
    }
  },
  {
    path: 'book/detail/:id',
    component: BookDetailComponent
  },
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
export class BookRoutingModule { }
