import { Routes } from '@angular/router';
import { HomeComponent } from './app/core/containers/home/home.component';
import { ArticlesComponent, ArticleDetailComponent } from './app/articles/containers/';
import { ArticleResolver, ArticlesResolver } from './app/core/services';
export const appRoutes: Routes = [

    { path: '', component: HomeComponent, resolve: { articles: ArticlesResolver } },
    { path: ':category', component: ArticlesComponent, resolve: { articles: ArticlesResolver } },
    { path: 'articles/:permalink', component: ArticleDetailComponent, resolve: { article: ArticleResolver } },
    { path: ':year/:month/:day/:permalink', component:ArticleDetailComponent, resolve: { article: ArticleResolver}},
    { path: '', redirectTo: '', pathMatch: 'full' }
];
