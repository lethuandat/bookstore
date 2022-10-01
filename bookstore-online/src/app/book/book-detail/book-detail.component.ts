import {Component, OnInit} from '@angular/core';
import {BookService} from "../book.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  numberOfPage: number;
  author: string;
  category: string;
  company: string;

  constructor(private bookService: BookService,
              private toastrService: ToastrService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.findById(this.id);
    });
  }

  ngOnInit(): void {
  }

  findById(id: number) {
    return this.bookService.findById(id).subscribe(book => {
      this.name = book.name;
      this.description = book.description;
      this.image = book.image;
      this.price = book.price;
      this.numberOfPage = book.numberOfPage;
      this.author = book.authors.name;
      this.category = book.categories.name;
      this.company = book.companies.name;
    });
  }
}
