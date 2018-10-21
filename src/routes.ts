import { Routes } from '@angular/router';
import { ArticlesComponent, ArticleDetailComponent, ArticleSummaryListComponent } from './app/articles/containers';
export const appRoutes: Routes = [
    { path: '', component: ArticleSummaryListComponent },
    { path: ':category', component: ArticlesComponent },
    { path: 'articles/:permalink', component: ArticleDetailComponent },
    { path: ':year/:month/:permalink', component: ArticleDetailComponent },
    { path: ':year/:month/:day/:permalink', component: ArticleDetailComponent },
    { path: '', redirectTo: '', pathMatch: 'full' }
];
