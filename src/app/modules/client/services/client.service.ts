import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../interfaces/client.interface';
import { Observable } from 'rxjs';
import { Page } from '../../shared/interfaces/page.interface';

@Injectable()
export class ClientService {
  private apiUrl = 'http://localhost:8081/laundry';

  constructor(private httpClient: HttpClient) { }

  public findByPhoneNumber(phoneNumber: string) {
    return this.httpClient.get(
      `${this.apiUrl}/clients/search/findByPhoneNumber?phone_number=${phoneNumber}`
    );
  }

  public createClient(dataClient: Client) {
    return this.httpClient.post(`${this.apiUrl}/clients`, dataClient);
  }

  public getClients(page: Page): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/clients?size=${page.size}&page=${page.number}`);
  }
}
