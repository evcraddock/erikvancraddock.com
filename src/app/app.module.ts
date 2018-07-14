import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CoreModule } from './core/core.module';
import { ArticlesModule } from './articles/articles.module';
import { MaterialModule } from './material';

import { AppComponent } from './core/containers/app.container';
import { AuthService } from './core/services/auth.service';
import { appRoutes } from '../routes';
import { RouteState } from './shared/models/route-state';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './reducers';

export const jwtOptionsFactory = (authService) => ({
  tokenGetter: authService.getToken,
  whitelistedDomains: ['localhost:8080']
  ,blacklistDomains: ['localhost:4200', 'https://erikvan.auth0.com/oauth/token']
})

@NgModule({
  imports: [
    CommonModule,
    CoreModule.forRoot(),
    MaterialModule,
    ArticlesModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        deps: [AuthService],
        useFactory: jwtOptionsFactory
      }
    }),
    BrowserModule,
    BrowserAnimationsModule,
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    
    StoreDevtoolsModule.instrument({
      name: 'ErikVanCraddock.Com Site',
      logOnly: environment.production,
    }),
  ],
  providers: [
    AuthService,
    { provide: RouterStateSerializer, useClass: RouteState },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
