import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../security/token-storage.service";
import {ShareService} from "../security/share.service";
import {BookService} from "../book/book.service";
import {Title} from "@angular/platform-browser";
import {Category} from "../model/category";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;
  currentUser: string;
  role: string;
  isLoggedIn = false;
  categories: Category[] = [];

  constructor(private tokenStorageService: TokenStorageService,
              private shareService: ShareService,
              private bookService: BookService,
              private router: Router,
              private title: Title) {
    this.title.setTitle("TD Bookstore - Online website");
    this.shareService.getClickEvent().subscribe(() => {
      this.loadHeader();
    });
  }

  ngOnInit(): void {
    this.getAllCategory();
    this.loadHeader();
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

  logOut() {
    this.tokenStorageService.signOut();
  }

  getCategory(id: number) {
    this.router.navigate([`category/${id}`]);
  }
}
