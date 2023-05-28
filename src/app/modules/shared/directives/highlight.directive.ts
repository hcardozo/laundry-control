import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {
    @Input() searchedWord: string = '';
    @Input() content: string = '';

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    public ngOnChanges(): void {
        if (!this.content) {
            return;
        }

        if (!this.searchedWord || !this.searchedWord.length) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', this.content);
            return;
        }

        this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', this.getFormattedText());
    }

    public getFormattedText() {
        const re = new RegExp(`(${this.searchedWord})`, 'gi');
        return this.content.replace(re, `<strong>$1</strong>`);
    }
}