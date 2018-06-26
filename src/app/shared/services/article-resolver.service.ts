import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IArticle } from '../models/index';
import { ArticleService } from './article.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class ArticleResolver implements Resolve<any> {
    constructor(private articleService: ArticleService) {}

    resolve(route: ActivatedRouteSnapshot) {
        if (route.params['id']) {
            const articleId = route.params['id'];
            return this.articleService.getArticle(articleId);
            // .catch(error => {
            //     return Observable.of(error);
            // });
        }

        // const params = new URLSearchParams();
        const params = new HttpParams();
        if (route.params['permalink']) {
            params.set('url', route.params['permalink']);
        }

        return this.articleService.getArticles(params);
        // .catch(error => {
        //     return Observable.of(error);
        // });
    }
}
