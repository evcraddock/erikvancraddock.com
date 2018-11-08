import { Routes } from '@angular/router';
import { ArticlesComponent, ArticleDetailComponent, ArticleSummaryListComponent, BookListComponent } from './app/articles/containers';

export const appRoutes: Routes = [
    { path: '', component: ArticleSummaryListComponent },
    { path: ':category', component: ArticlesComponent },
    { path: 'articles/:permalink', component: ArticleDetailComponent },
    { path: ':year/:month/:permalink', component: ArticleDetailComponent },
    { path: ':year/:month/:day/:permalink', component: ArticleDetailComponent },
    { path: 'pages/books', component: BookListComponent },
    { path: '', redirectTo: '', pathMatch: 'full' }
];
