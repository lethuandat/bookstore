import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/book";
import {BookService} from "../book.service";
import {ToastrService} from "ngx-toastr";
import {Title} from "@angular/platform-browser";
import {TokenStorageService} from "../../security/token-storage.service";
import {ShareService} from "../../security/share.service";
import {Category} from "../../model/category";

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

  username: string;
  currentUser: string;
  role: string;
  isLoggedIn = false;
  categories: Category[] = [];

  constructor(private bookService: BookService,
              private toastrService: ToastrService,
              private title: Title,
              private tokenStorageService: TokenStorageService,
              private shareService: ShareService) {
    this.title.setTitle("Tất cả sách");
    this.shareService.getClickEvent().subscribe(() => {
      this.loadHeader();
    });
  }

  ngOnInit(): void {
    this.getAllCategory();
    this.loadHeader();
    this.getAll();
  }

  getAllCategory(): void {
    this.bookService.findAllCategory().subscribe(categories => {
      this.categories = categories;
    })
  }

  loadHeader(): void {
    if (this.tokenStorageService.getToken()) {
      this.currentUser = this.tokenStorageService.getUser().username;
      this.role = this.tokenStorageService.getUser().roles[0];
      this.username = this.tokenStorageService.getUser().username;
    }
    this.isLoggedIn = this.username != null;
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
      this.checkPreviousAndNext();
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

  previousPage(event: any) {
    event.preventDefault();
    this.indexPagination--;
    this.ngOnInit();
  }

  nextPage(event: any) {
    event.preventDefault();
    this.indexPagination++;
    this.ngOnInit();
  }

  checkPreviousAndNext() {
    if (this.indexPagination === 0) {
      this.previousPageStyle = 'none';
    } else if (this.indexPagination !== 0) {
      this.previousPageStyle = 'inline-block';
    }
    if (this.indexPagination < (this.totalPage.length - 1)) {
      this.nextPageStyle = 'inline-block';
    } else if (this.indexPagination === (this.totalPage.length - 1) || this.indexPagination > (this.totalPage.length - 1)) {
      this.nextPageStyle = 'none';
    }
  }

  changePageSize(event: any) {
    switch (event.target.value) {
      case '6' :
        this.pageSize = 6;
        this.indexPagination = 0;
        this.ngOnInit();
        break;
      case '9' :
        this.pageSize = 9;
        this.indexPagination = 0;
        this.ngOnInit();
        break;
      case '12':
        this.pageSize = 12;
        this.indexPagination = 0;
        this.ngOnInit();
        break;

    }
  }


  getAllByCategory(categoryId: number) {
    this.bookService.findAllByCategory(this.indexPagination, this.keyword, categoryId, this.pageSize).subscribe((result?: any) => {
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
      this.checkPreviousAndNext();
    });
  }
}
