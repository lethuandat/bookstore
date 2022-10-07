import {Component, OnInit} from '@angular/core';
import {BookService} from "../book.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, ParamMap} from "@angular/router";
import Swal from "sweetalert2";
import {DataService} from "../data.service";
import {Book} from "../../model/book";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;
  id: number;
  totalQuantity: number = this.bookService.getTotalCartQuantity();
  totalPrice: number = this.bookService.getTotalCartPrice();
  cartList: any = this.bookService.getCarts();

  constructor(private bookService: BookService,
              private toastrService: ToastrService,
              private activatedRoute: ActivatedRoute,
              private data: DataService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.findById(this.id);
    });
  }

  ngOnInit(): void {
  }

  findById(id: number) {
    return this.bookService.findById(id).subscribe(book => {
      this.book = book;
    });
  }

  addToCart(book: any) {
    let index = this.cartList.findIndex((item: any) => {
      return item.id == book.id;
    });

    if (index >= 0) {
      this.cartList[index].quantity += 1;
    } else {
      let cartItem: any = {
        id: book.id,
        name: book.name,
        price: book.price,
        quantity: 1,
        image: book.image
      }
      this.cartList.push(cartItem);
    }
    this.bookService.saveCarts(this.cartList);
    this.data.changeData({
      totalQuantity: this.bookService.getTotalCartQuantity()
    })
    Swal.fire('Thông báo', 'Thêm vào giỏ hàng thành công', 'success');
  }

  updateQuantity(index: number, event: any) {
    let newQuantity = event.target.value;
    newQuantity =  newQuantity > 0 ? newQuantity : 1;
    event.target.value = newQuantity;
    this.cartList[index].quantity = newQuantity;
    this.bookService.saveCarts(this.cartList);
    this.totalQuantity = this.bookService.getTotalCartQuantity();
    this.totalPrice = this.bookService.getTotalCartPrice();
    this.data.changeData({
      totalQuantity: this.bookService.getTotalCartQuantity()
    })
  }

  minusQuantity(index: number, quantity: any) {
    let newQuantity = parseInt(quantity) - 1;
    newQuantity =  newQuantity > 0 ? newQuantity : 1;
    this.cartList[index].quantity = newQuantity;
    this.bookService.saveCarts(this.cartList);
    this.totalQuantity = this.bookService.getTotalCartQuantity();
    this.totalPrice = this.bookService.getTotalCartPrice();
    this.data.changeData({
      totalQuantity: this.bookService.getTotalCartQuantity()
    })
  }

  plusQuantity(index: number, quantity: any) {
    let newQuantity = parseInt(quantity) + 1;
    this.cartList[index].quantity = newQuantity;
    this.bookService.saveCarts(this.cartList);
    this.totalQuantity = this.bookService.getTotalCartQuantity();
    this.totalPrice = this.bookService.getTotalCartPrice();
    this.data.changeData({
      totalQuantity: this.bookService.getTotalCartQuantity()
    })
  }
}
