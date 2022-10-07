import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookRoutingModule} from './book-routing.module';
import {BookListComponent} from './book-list/book-list.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookUpdateComponent} from './book-update/book-update.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CartModule} from "../cart/cart.module";
import { BookByCategoryComponent } from './book-by-category/book-by-category.component';

@NgModule({
  declarations: [
    BookListComponent,
    BookCreateComponent,
    BookUpdateComponent,
    BookDetailComponent,
    BookByCategoryComponent],
    imports: [
        CommonModule,
        CartModule,
        BookRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class BookModule {
}
