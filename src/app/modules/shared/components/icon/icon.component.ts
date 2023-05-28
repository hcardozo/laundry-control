import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  public svg: SafeHtml = '';

  public constructor(private httpClient: HttpClient, private domSanitizer: DomSanitizer) { }

  @Input()
  public width: string = '32px';

  @Input()
  public height: string = '32px';

  @Input()
  public color: string = '#fff';

  @Input()
  public set icon(name: string) {
    this.httpClient.get(`assets/icons/${name}.svg`, { responseType: 'text' })
      .subscribe(value => {
        this.svg = this.domSanitizer.bypassSecurityTrustHtml(value);
      });
  }
}
