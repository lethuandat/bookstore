import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Author} from "../../model/author";
import {Category} from "../../model/category";
import {Company} from "../../model/company";
import {BookService} from "../book.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  id: number;
  bookForm: FormGroup;

  constructor(private bookService: BookService,
              private toastrService: ToastrService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getBook(this.id);
    });
  }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      description: new FormControl(''),
      image: new FormControl(''),
      price: new FormControl(''),
      numberOfPage: new FormControl(''),
      authors: new FormControl(''),
      categories: new FormControl(''),
      companies: new FormControl(''),
    });
  }

  getBook(id: number) {
    return this.bookService.findById(id).subscribe(book => {
      this.bookForm.patchValue(book);
    });
  }
}
