import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'evc-nav-item',
  template: `
    <a mat-button [routerLink]="routerLink" (click)="navigate.emit()">
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
