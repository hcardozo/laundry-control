import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Column } from '../../interfaces/column.interface';
import { Page } from '../../interfaces/page.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input()
  public title: string = '';

  @Input()
  public columns: Column[] = [];

  @Input()
  public data: any[] = [];

  @Input()
  public page: Page = {
    size: 0,
    totalElements: 0,
    totalPages: 0,
    number: 0
  };

  @Output()
  public pageChange: EventEmitter<number> = new EventEmitter()

  @Output()
  public sizeChange: EventEmitter<number> = new EventEmitter()

  public onPageChange(page: number) {
    if (this.page.number != page) this.pageChange.emit(page);
  }

  public onChangeSize(event: any) {
    this.sizeChange.emit(event.target.value);
  }
}
