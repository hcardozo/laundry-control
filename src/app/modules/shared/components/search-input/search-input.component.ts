import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchInputComponent),
      multi: true
    }
  ]
})
export class SearchInputComponent implements ControlValueAccessor {
  @Input()
  public values: any[] = [];

  public searchText: string = '';
  public isSearched: boolean = false;

  private _onChange: any = () => { };
  private _onTouched: any = () => { };
  private _isDisabled: boolean = false;

  set value(value: string) {
    this.searchText = value;
    this._onChange(value);
    this._onTouched(value);
  }

  public writeValue(value: any): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this._isDisabled = isDisabled;
  }

  public onSelect(value: string) {
    this.value = value;
    this.isSearched = true;
  }

  public onInput(event: any) {
    this.value = event.target.value;
    this.isSearched = false;
  }
}
