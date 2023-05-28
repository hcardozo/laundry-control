import { CurrencyPipe } from "@angular/common";
import { AfterViewInit, Directive, ElementRef, HostListener, OnDestroy } from "@angular/core";

@Directive({
    selector: '[appInputCurrencyDirective]'
})
export class InputCurrencyDirective implements AfterViewInit {
    constructor(private elementRef: ElementRef, private currencyPipe: CurrencyPipe) { }

    ngAfterViewInit(): void {
        const initialValue = this.elementRef.nativeElement.value;
        this.setValue(this.formatPrice(initialValue));
    }

    @HostListener('focus', ['$event']) onFocus() {
        const initialValue = this.elementRef.nativeElement.value;
        this.setValue(this.unformatPrice(initialValue));
    }

    @HostListener('blur', ['$event']) onBlur() {
        const initialValue = this.elementRef.nativeElement.value;
        this.setValue(this.formatPrice(initialValue));
    }

    private formatPrice(value: string) {
        return this.currencyPipe.transform(value, 'COP', 'symbol-narrow', '0.0-2') || '';
    }

    private unformatPrice(value: string) {
        return value.replace(/[$,]/g, '');
    }

    private setValue(value: string) {
        this.elementRef.nativeElement.value = value;
    }
}