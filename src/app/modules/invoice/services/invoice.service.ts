import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class InvoiceService {
  private apiUrl = 'http://localhost:8081/laundry';

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/products`);
  }
}
