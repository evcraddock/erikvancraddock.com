import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-evc-nav-item',
  template: `
    <a mat-button (click)="navigate.emit()">
      <ng-content></ng-content>
    </a>
  `
})
export class NavItemComponent {
  @Input() icon = '';
  @Input() hint = '';
  @Input() routerLink: string | any[] = '/';
  @Output() navigate = new EventEmitter();
}
