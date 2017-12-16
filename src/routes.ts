import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { ArticlesComponent, ArticleDetailComponent } from './app/articles';
import { ArticleResolver } from './app/shared/services';
export const appRoutes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'articles', component: ArticlesComponent},
    { path: 'articles/:permalink', component: ArticleDetailComponent, resolve: { article: ArticleResolver } },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
