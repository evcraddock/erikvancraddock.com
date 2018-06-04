import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { URLSearchParams, Response } from '@angular/http';


import { IArticle } from '../models/index';
import { ArticleService } from './article.service';
import { Observable } from 'rxjs';

@Injectable()
export class ArticlesResolver implements Resolve<any> {
    constructor(private articleService: ArticleService) {}

    resolve(route: ActivatedRouteSnapshot) {
        const params = new URLSearchParams();
        if (route.params['category']) {
            params.set('categories', route.params['category']);
        }

        return this.articleService.getArticles(params);
        // .catch(error => {
        //     return Observable.of(error);
        // });
    }
}
