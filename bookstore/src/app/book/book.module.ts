import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookRoutingModule} from './book-routing.module';
import {BookListComponent} from './book-list/book-list.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookUpdateComponent} from './book-update/book-update.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CartModule} from "../cart/cart.module";


@NgModule({
  declarations: [
    BookListComponent,
    BookCreateComponent,
    BookUpdateComponent,
    BookDetailComponent],
  imports: [
    CommonModule,
    CartModule,
    BookRoutingModule,
    ReactiveFormsModule
  ]
})
export class BookModule {
}
