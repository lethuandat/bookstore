import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../security/token-storage.service";
import {ShareService} from "../security/share.service";
import {BookService} from "../book/book.service";
import {Title} from "@angular/platform-browser";
import {Category} from "../model/category";
import {Router} from "@angular/router";
import {DataService} from "../book/data.service";
import {CustomerService} from "../security/customer.service";
import {Customer} from "../model/customer";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userId: number;
  username: string;
  currentUser: string;
  customer: Customer;
  customerName: string;
  role: string;
  isLoggedIn = false;
  categories: Category[] = [];
  totalQuantity: number = 0;
  keyword: any = '';

  constructor(private tokenStorageService: TokenStorageService,
              private shareService: ShareService,
              private bookService: BookService,
              private customerService: CustomerService,
              private router: Router,
              private title: Title,
              private data: DataService) {
    this.title.setTitle("TD Bookstore - Online website");
    this.shareService.getClickEvent().subscribe(() => {
      this.loadHeader();
    });
  }

  ngOnInit(): void {
    this.getAllCategory();
    this.loadHeader();
    this.data.getData.subscribe((result: any) => {
      this.totalQuantity = result.totalQuantity;
    });
    this.customerService.findByName(this.username).subscribe((result: any) =>{
      this.userId = result.id;
      console.log(this.userId)
      this.customerService.findByUserId(this.userId).subscribe((res: any) => {
        this.customer = res;
        this.customerName = res.name;
      })
    })
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

  getCategory(categoryId: number) {
    this.router.navigate([`category/${categoryId}`]);
  }

  search() {
    this.data.changeData({
      keyword: this.keyword
    })
  }
}
