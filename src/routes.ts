import { Routes } from '@angular/router';
import { ArticlesComponent, ArticleDetailComponent, ArticleSummaryListComponent } from './app/articles/containers';
import { ArticleResolver, ArticlesResolver } from './app/core/services';
export const appRoutes: Routes = [

    { path: '', component: ArticleSummaryListComponent },
    { path: ':category', component: ArticlesComponent, resolve: { articles: ArticlesResolver } },
    { path: 'articles/:permalink', component: ArticleDetailComponent, resolve: { article: ArticleResolver } },
    { path: ':year/:month/:day/:permalink', component: ArticleDetailComponent, resolve: { article: ArticleResolver}},
    { path: '', redirectTo: '', pathMatch: 'full' }
];
