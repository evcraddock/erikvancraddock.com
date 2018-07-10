import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './containers/app.container';
import { AboutMeComponent } from './containers/about/about-me.component';
import { NotFoundPageComponent } from './containers/not-found-page';

import { NavItemComponent } from './components/nav-item';

import { ToolbarComponent } from './components/toolbar';
import { MaterialModule } from '../material';

import { ImageService } from './services/image.service';


export const COMPONENTS = [
  AppComponent,
  AboutMeComponent,
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
      providers: [ ImageService ]
    };
  }
}