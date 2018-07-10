import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { URLSearchParams, Response } from '@angular/http';


import { IArticle } from '../models';
import { ArticleService } from './article.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class ArticlesResolver implements Resolve<any> {
    constructor(private articleService: ArticleService) {}

    resolve(route: ActivatedRouteSnapshot) {
        if (route.params['category']) {
            const cat : string = route.params['category'];

            const params = new HttpParams().set('categories', cat);
            return this.articleService.getArticles(params);
        }

        return this.articleService.getArticles();
    }
}
