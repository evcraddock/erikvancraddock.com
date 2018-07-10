import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './containers/app.container';
import { NotFoundPageComponent } from './containers/not-found-page';

import { NavItemComponent } from './components/nav-item';

import { ToolbarComponent } from './components/toolbar';
import { MaterialModule } from '../material';


export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent,
  NavItemComponent,
  ToolbarComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
    };
  }
}