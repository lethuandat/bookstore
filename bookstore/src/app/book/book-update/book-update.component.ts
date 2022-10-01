import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BookService} from "../book.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Category} from "../../model/category";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  id: number;
  bookForm: FormGroup;
  categories: Category[] = [];

  constructor(private bookService: BookService,
              private toastrService: ToastrService,
              private activatedRoute: ActivatedRoute,
              private title: Title,
              private router: Router) {
    this.title.setTitle("Cập nhật sách");
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getBook(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllCategory();

    this.bookForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      description: new FormControl(''),
      image: new FormControl(''),
      size: new FormControl(''),
      price: new FormControl(''),
      numberOfPage: new FormControl(''),
      quantity: new FormControl(''),
      date: new FormControl(''),
      author: new FormControl(''),
      categories: new FormControl(''),
      company: new FormControl('')
    });
  }

  getAllCategory(): void {
    this.bookService.findAllCategory().subscribe(categories => {
      this.categories = categories;
    })
  }

  getBook(id: number) {
    return this.bookService.findById(id).subscribe(book => {
      this.bookForm.patchValue(book);
    });
  }

  submit() {

  }
}
