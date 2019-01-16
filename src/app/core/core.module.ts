import { NgModule, APP_INITIALIZER } from '@angular/core';
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
  ToolbarComponent,
} from './components';

import { ImageService } from './services/image.service';
import { AnalyticsService } from './services/analytics.service';
import { ConfigService } from './services/config.service';

export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent,
  ToolbarComponent,
];

const appInitializerFn = (appConfig: ConfigService) => {
  return () => {
      return appConfig.loadConfig();
  };
};


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
            AnalyticsService,
            ConfigService,
            {
                provide: APP_INITIALIZER,
                useFactory: appInitializerFn,
                multi: true,
                deps: [ConfigService]
            }
      ]
    };
  }
}
