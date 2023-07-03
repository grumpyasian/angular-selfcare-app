import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  template: `
    <div [innerHTML]="iconContent"></div>
  `
})
export class IconComponent {
  @Input() iconPath: any;
  iconContent: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges() {
    if (this.iconPath) {
      this.loadIcon(this.iconPath);
    }
  }

  loadIcon(iconPath: string) {
    fetch(iconPath)
      .then(response => response.text())
      .then(svgData => {
        const sanitizedSvg = this.sanitizer.bypassSecurityTrustHtml(svgData);
        this.iconContent = sanitizedSvg;
      });
  }
}
