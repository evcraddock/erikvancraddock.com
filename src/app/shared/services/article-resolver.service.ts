import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IArticle } from '../models';
import { ArticleService } from './article.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class ArticleResolver implements Resolve<any> {
    constructor(private articleService: ArticleService) {}

    resolve(route: ActivatedRouteSnapshot) {  
        if (route.params['permalink']) {
            const params = new HttpParams().set('url', route.params['permalink']);
            return this.articleService.getArticles(params);
        }
    }
}
