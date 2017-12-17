import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatGridListModule,
  MatChipsModule,
  MatIconRegistry
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
  ArticleDetailComponent
} from './articles/';
import { ArticleService, ArticleResolver } from './shared/services/';
import { MarkdownToHtmlPipe } from './shared/pipes/markdown-to-html/markdown-to-html.pipe';
import { appRoutes } from '../routes';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutMeComponent,
    ArticlesComponent,
    ArticlesListItemComponent,
    ArticleDetailComponent,
    MarkdownToHtmlPipe,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatChipsModule,
    FlexLayoutModule
  ],
  providers: [
    ArticleService,
    ArticleResolver,
    MatIconRegistry
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
