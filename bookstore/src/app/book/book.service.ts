import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/book";
import {Observable} from "rxjs";
import {Category} from "../model/category";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  findAll(page: number, keyword: string, size: number): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL + '/api/public/book/list?page=' + page + '&keyword=' + keyword + '&size=' + size);
  }

  findAllByCategory(page: number, categoryId: number, size: number): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL + '/api/public/book/list?page=' + page + '&categoryId=' + categoryId + '&size=' + size);
  }

  findAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + '/api/public/category/list');
  }

  findById(id: number): Observable<Book> {
    return this.http.get<Book>(`${API_URL}/api/public/book/${id}`);
  }

  delete(id: number): Observable<Book> {
    return this.http.delete<Book>(`${API_URL}/api/public/book/${id}`);
  }

  save(book): Observable<Book> {
    return this.http.post<Book>(`${API_URL}/api/public/book/create`, book);
  }

  update(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${API_URL}/api/public/book/update/${id}`, book);
  }

  getCarts() {
    let cartJson = sessionStorage.getItem('cart');
    if (cartJson) {
      return JSON.parse(cartJson);
    } else {
      return [];
    }
  }

  saveCarts(cartList: any) {
    let cartJson = JSON.stringify(cartList);
    sessionStorage.setItem('cart', cartJson);
  }

  getTotalCartQuantity(): number {
    let cartList = this.getCarts();
    let totalQuantity = 0;
    cartList.forEach((item: any) => {
      totalQuantity += item.quantity;
    })
    return totalQuantity;
  }

  getTotalCartPrice(): number {
    let cartList = this.getCarts();
    let totalPrice = 0;
    cartList.forEach((item: any) => {
      totalPrice += item.quantity * item.price;
    })
    return totalPrice;
  }
}
