import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about/about-me.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import {
  ArticlesComponent,
  ArticlesListItemComponent,
  ArticlesSummaryItemComponent,
  ArticleDetailComponent
} from './articles/';
import { ArticleService, ArticleResolver, ArticlesResolver } from './shared/services/';
import { AuthService } from './shared/services/auth.service';
import { MarkdownToHtmlPipe, SafePipe } from './shared/pipes';
import { appRoutes } from '../routes';

export const jwtOptionsFactory = (authService) => ({
  tokenGetter: authService.getToken, //{ 
    
    // const token = authService.getToken();
    // if (token == null) {
    //   return authService.loadToken();
    // }

    // return token;
  //},
  whitelistedDomains: ['localhost:8080']
  ,blacklistDomains: ['localhost:4200', 'https://erikvan.auth0.com/oauth/token']
})

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
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
    RouterModule.forRoot(appRoutes),
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
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
