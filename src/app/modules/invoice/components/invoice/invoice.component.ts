import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/modules/client/interfaces/client.interface';
import { InvoiceDetail } from '../../interfaces/invoice-detail.interface';
import { Invoice } from '../../interfaces/invoice.interface';
import { Product } from '../../interfaces/product.interface';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {
  public title = 'Facturación';
  public client!: Client;
  public phoneNumber: string = '';

  public productName: string = '';
  public products: Product[] = [];
  public invoice: Invoice = {
    detail: [],
    deposit: 0,
  };

  public dateTomorrow!: string;

  constructor(private invoiceService: InvoiceService) {
    let dataClient = sessionStorage.getItem('dataClient');
    if (dataClient !== null) {
      this.client = JSON.parse(dataClient);
    }
    this.onDateTomorrow();
  }

  public ngOnInit(): void {
    this.invoiceService.getProducts().subscribe((response) => {
      this.products = response._embedded.products;
    });
    
   
  }

  public onDateTomorrow() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.dateTomorrow = this.dateFormat(tomorrow);
    
  }

  public dateFormat(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  public onInputQuantity(index: number, event: any) {
    let quantity = event.target.value;
    let value = this.invoice.detail[index].value;
    this.invoice.detail[index].quantity = +quantity;
    this.invoice.detail[index].totalValue = quantity * value;
  }

  public onInputPrice(index: number, event: any) {
    let quantity = this.invoice.detail[index].quantity;
    let value = event.target.value;
    this.invoice.detail[index].value = value;
    this.invoice.detail[index].totalValue = quantity * value;
  }

  public onSearch() {
    let product = this.products.filter(
      (product: Product) => product.name == this.productName
    )[0];

    if (product) {
      this.invoice.detail.push({
        name: product.name,
        description: product.description,
        quantity: 1,
        value: product.value,
        totalValue: product.value,
      });
      this.productName = '';
    }
  }

  get totalQuantity(): number {
    return this.invoice.detail.length > 0
      ? this.invoice.detail
          .map((invoiceDetail: InvoiceDetail) => invoiceDetail.quantity)
          .reduce((previous: number, current: number) => previous + current)
      : 0;
  }

  get totalValue(): number {
    return this.invoice.detail.length > 0
      ? this.invoice.detail
          .map((invoiceDetail: InvoiceDetail) => invoiceDetail.totalValue)
          .reduce((previous: number, current: number) => previous + current)
      : 0;
  }

  get balance(): number {
    return this.totalValue - this.invoice.deposit;
  }
}
