import { InvoiceDetail } from "./invoice-detail.interface";

export interface Invoice {
    detail: InvoiceDetail[];
    deposit: number;
}