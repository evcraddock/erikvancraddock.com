import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ArticlesModule } from './articles/articles.module';
import { MaterialModule } from './material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { AppComponent } from './core/containers/app.container';
import { AuthService } from './core/services/auth.service';
import { appRoutes } from '../routes';

export const jwtOptionsFactory = (authService) => ({
  tokenGetter: authService.getToken,
  whitelistedDomains: ['localhost:8080']
  ,blacklistDomains: ['localhost:4200', 'https://erikvan.auth0.com/oauth/token']
})

@NgModule({
  imports: [
    CommonModule,
    CoreModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    // StoreModule.forRoot(reducers, { metaReducers }),
    // EffectsModule.forRoot([]),
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
    MaterialModule,
    ArticlesModule,
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
