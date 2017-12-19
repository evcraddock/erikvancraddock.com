import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { ArticlesComponent, ArticleDetailComponent } from './app/articles';
import { ArticleResolver, ArticlesResolver } from './app/shared/services';
export const appRoutes: Routes = [

    { path: '', component: HomeComponent, resolve: { articles: ArticlesResolver } },
    { path: ':category', component: ArticlesComponent, resolve: { articles: ArticlesResolver } },
    { path: 'articles/:permalink', component: ArticleDetailComponent, resolve: { article: ArticleResolver } },
    { path: '', redirectTo: '', pathMatch: 'full' }
];
