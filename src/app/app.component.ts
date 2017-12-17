import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public constructor (private domSanitizer: DomSanitizer, public matIconRegistry: MatIconRegistry) {
      // add custom material icons
      matIconRegistry.addSvgIcon('facebook', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/F_icon.svg'));
      matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
  title = 'app';
}
