import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/book";
import {BookService} from "../book.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  number: number;
  indexPagination = 0;
  totalPage: Array<number>;
  previousPageStyle = 'inline-block';
  nextPageStyle = 'inline-block';
  totalElements = 0;
  pageSize: number;
  displayPagination = 'inline-block';
  numberOfElement = 0;
  keyword = '';
  nameDelete: string;
  idDelete: number;

  constructor(private bookService: BookService,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.bookService.findAll(this.indexPagination, this.keyword, this.pageSize).subscribe((result?: any) => {
      if (result === null) {
        this.totalPage = new Array(0);
        this.books = [];
        this.displayPagination = 'none';
      } else {
        this.number = result?.number;
        this.pageSize = result?.size;
        this.numberOfElement = result?.numberOfElements;
        this.books = result.content;
        this.totalElements = result?.totalElements;
        this.totalPage = new Array(result?.totalPages);
      }
      // this.checkPreviousAndNext();
    });
  }

  openDelete(book: Book) {
    this.nameDelete = book.name;
    this.idDelete = book.id;
  }

  delete(idDelete: number) {
    this.bookService.delete(idDelete).subscribe(() => {
      this.ngOnInit();
      this.toastrService.success('Xóa thành công', 'Thông báo');
    });
  }
}
