import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material';
import { SharedModule } from '../shared/shared.module';

import { 
  AppComponent,
  NotFoundPageComponent,
} from './containers';

import { 
  NavItemComponent,
  ToolbarComponent,
} from './components';

import { 
  ArticleResolver, 
  ArticleService, 
  ArticlesResolver 
} from './services';

import { ImageService } from './services/image.service';

export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent,
  NavItemComponent,
  ToolbarComponent,
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule, 
    MaterialModule, 
    FlexLayoutModule,
    SharedModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [ 
            ImageService,
            ArticleResolver, 
            ArticleService, 
            ArticlesResolver
        ]
    };
  }
}