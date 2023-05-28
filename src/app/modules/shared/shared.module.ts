import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconComponent } from './components/icon/icon.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TableComponent } from './components/table/table.component';
import { VerticalMenuComponent } from './components/vertical-menu/vertical-menu.component';
import { HighlightDirective } from './directives/highlight.directive';
import { InputCurrencyDirective } from './directives/input-currency.directive';
import { InputOnlyNumberDirective } from './directives/input-only-number.directive';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    VerticalMenuComponent,
    SpinnerComponent,
    SearchInputComponent,
    InputOnlyNumberDirective,
    HighlightDirective,
    InputCurrencyDirective,
    SearchPipe,
    IconComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    VerticalMenuComponent,
    SpinnerComponent,
    SearchInputComponent,
    InputOnlyNumberDirective,
    HighlightDirective,
    InputCurrencyDirective,
    SearchPipe,
    IconComponent,
    TableComponent
  ]
})
export class SharedModule { }
