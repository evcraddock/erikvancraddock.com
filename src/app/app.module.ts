import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatGridListModule,
  MatChipsModule,
  MatIconRegistry,
  MatPaginatorModule
} from '@angular/material';

import { CoreModule } from './core/core.module';

import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { AppComponent } from './core/containers/app.container';
import { AboutMeComponent } from './about/about-me.component';

import { HomeComponent } from './home/home.component';
import {
  ArticlesComponent,
  ArticlesListItemComponent,
  ArticlesSummaryItemComponent,
  ArticleDetailComponent
} from './articles';

import { ArticleService, ArticleResolver, ArticlesResolver, ImageService } from './shared/services';

import { AuthService } from './shared/services/auth.service';

import { MarkdownToHtmlPipe, SafePipe } from './shared/pipes';
import { appRoutes } from '../routes';

export const jwtOptionsFactory = (authService) => ({
  tokenGetter: authService.getToken,
  whitelistedDomains: ['localhost:8080']
  ,blacklistDomains: ['localhost:4200', 'https://erikvan.auth0.com/oauth/token']
})

@NgModule({
  declarations: [
    // AppComponent,
    // NavComponent,
    HomeComponent,
    AboutMeComponent,
    ArticlesComponent,
    ArticlesListItemComponent,
    ArticlesSummaryItemComponent,
    ArticleDetailComponent,
    MarkdownToHtmlPipe,
    SafePipe
  ],
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
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatChipsModule,
    MatPaginatorModule,
    FlexLayoutModule
  ],
  providers: [
    ArticleService,
    ArticleResolver,
    ArticlesResolver,
    MatIconRegistry,
    AuthService,
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
