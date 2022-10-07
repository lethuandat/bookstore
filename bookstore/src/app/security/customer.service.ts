import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";
import {AppUser} from "../model/app-user";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  save(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL + '/api/public/customer/create', customer);
  }

  findByName(name: string): Observable<AppUser> {
    return this.http.get<AppUser>(`${API_URL}/api/public/customer/user-name/${name}`);
  }


  findByUserId(userId: number): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/api/public/customer/user-id/${userId}`);
  }

  checkPhone(phone: string): Observable<string> {
    return this.http.get<string>(API_URL + '/api/public/customer/checkPhone/' + phone);
  }

  checkIdCard(idCard: string): Observable<string> {
    return this.http.get<string>(API_URL + '/api/public/customer/checkIdCard/' + idCard);
  }

  checkUsername(username: string): Observable<string> {
    return this.http.get<string>(API_URL + '/api/public/customer/checkUsername/' + username);
  }

  checkEmail(email: string): Observable<string> {
    return this.http.get<string>(API_URL + '/customer/checkEmail/' + email);
  }
}
