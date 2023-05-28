import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceService } from './services/invoice.service';

@NgModule({
  declarations: [
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    CurrencyPipe,
    InvoiceService
  ]
})
export class InvoiceModule { }
