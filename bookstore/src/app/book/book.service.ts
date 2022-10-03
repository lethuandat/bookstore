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

  findAllByCategory(page: number, keyword: string, categoryId: number, size: number): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL + '/api/public/book/list?page=' + page + '&keyword=' + keyword + '&categoryId=' + categoryId + '&size=' + size);
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
}
