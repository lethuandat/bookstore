import { Component, OnInit } from '@angular/core';
import {BookService} from "../../book/book.service";
import Swal from "sweetalert2";
import {DataService} from "../../book/data.service";
import {render} from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartList: any = [];
  totalQuantity: number = this.bookService.getTotalCartQuantity();
  totalPrice: number = this.bookService.getTotalCartPrice();
  usdPrice = ((this.totalPrice / 23000).toFixed(2)).toString();

  constructor(private bookService: BookService,
              private data: DataService) {
  }

  ngOnInit(): void {
    this.cartList = this.bookService.getCarts();
    render({
      id: '#myPaypalButtons',
      currency: 'USD',
      value: this.usdPrice,
      onApprove: (details) => {
        this.cartList.
        Swal.fire('Thanh toán thành công', 'Hàng sẽ được giao trong vòng 3 ngày', 'success');
      }
    });
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
        this.data.changeData({
          totalQuantity: this.bookService.getTotalCartQuantity()
        })
      }
    })
  }
}
