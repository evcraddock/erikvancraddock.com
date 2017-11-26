import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { ArticlesComponent } from './app/articles/articles.component';

export const appRoutes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'articles', component: ArticlesComponent},
    // { path: '', redirectTo: 'home', pathMatch: 'full' }
];
