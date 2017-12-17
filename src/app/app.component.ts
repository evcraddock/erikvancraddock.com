import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public constructor (public matIconRegistry: MatIconRegistry) {
      matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
  title = 'app';
}
