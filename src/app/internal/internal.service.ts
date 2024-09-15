import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SERVER_URL } from "../env";

@Injectable({
  providedIn: 'root'
})
export class InternalService {

  baseUrl = `${SERVER_URL}`

  constructor(private http: HttpClient) { }

  getAvailableBooks() {
    const url = `${this.baseUrl}/api/books/available`

    return this.http.get(url);
  }

  getRentedBooks() {
    const url = `${this.baseUrl}/api/books/available`

    return this.http.get(url);
  }

  getSoldBooks() {
    const url = `${this.baseUrl}/api/books/available`

    return this.http.get(url);
  }

  persistBook(bookData: any) {
    const url = `${this.baseUrl}/api/books/add`

    return this.http.post(url, bookData);
  }

  rentBook(bookData: any) {
    const url = `${this.baseUrl}/api/books/rent`

    return this.http.post(url, bookData);
  }
}
