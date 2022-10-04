import { Component, OnInit } from '@angular/core';
import {BookService} from "../../book/book.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartList: any = [];
  totalQuantity: number = this.bookService.getTotalCartQuantity();
  totalPrice: number = this.bookService.getTotalCartPrice();

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.cartList = this.bookService.getCarts();
  }

  subTotal(cart: any) {
    return cart.quantity * cart.price;
  }

  updateQuantity(index: number, event: any) {
    let newQuantity = event.target.value;
    newQuantity =  newQuantity > 0 ? newQuantity : 1;
    event.target.value = newQuantity;
    this.cartList[index].quantity = newQuantity;
    this.bookService.saveCarts(this.cartList);
    this.totalQuantity = this.bookService.getTotalCartQuantity();
    this.totalPrice = this.bookService.getTotalCartPrice();
  }

  minusQuantity(index: number, quantity: any) {
    let newQuantity = parseInt(quantity) - 1;
    newQuantity =  newQuantity > 0 ? newQuantity : 1;
    this.cartList[index].quantity = newQuantity;
    this.bookService.saveCarts(this.cartList);
    this.totalQuantity = this.bookService.getTotalCartQuantity();
    this.totalPrice = this.bookService.getTotalCartPrice();
  }

  plusQuantity(index: number, quantity: any) {
    let newQuantity = parseInt(quantity) + 1;
    this.cartList[index].quantity = newQuantity;
    this.bookService.saveCarts(this.cartList);
    this.totalQuantity = this.bookService.getTotalCartQuantity();
    this.totalPrice = this.bookService.getTotalCartPrice();
  }

  removeCart(index: number) {
    let _this = this;
    Swal.fire({
      title: 'Bạn có muốn xóa không?',
      text: "Nhấn OK để xóa",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Thông báo',
          'Xóa thành công',
          'success'
        );
        _this.cartList.splice(index, 1);
        _this.bookService.saveCarts(_this.cartList);
        this.totalQuantity = this.bookService.getTotalCartQuantity();
        this.totalPrice = this.bookService.getTotalCartPrice();
      }
    })
  }
}
