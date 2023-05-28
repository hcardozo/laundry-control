import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './components/invoice/invoice.component';
const routes: Routes = [
  {
    path: 'create',
    title: 'Factura',
    component: InvoiceComponent
  },
  { path: '', redirectTo: 'create', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }