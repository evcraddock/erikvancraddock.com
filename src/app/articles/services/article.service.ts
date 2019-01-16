import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IArticle, Article } from '../../shared/models/article';
import { ConfigService } from '../../core/services/config.service';

@Injectable()
export class ArticleService {

    constructor(
        private http: HttpClient,
        private environment: ConfigService) {}

    getArticles(params?: HttpParams): Observable<IArticle[]> {
        const url = this.environment.config.apiEndpoint + '/articles';

        return this.http.get<IArticle[]>(url, {
            params: params
        });
    }

    getArticle(id: string): Observable<IArticle> {
        const url = this.environment.config.apiEndpoint + '/articles/' + id;

        return this.http.get<IArticle>(url);
    }

    private handleArticleError(error: Response) {
        let msg = '';
        if (error.status === 404) {
            msg = 'Not able to connect to the article server, try again later';
        } else {
            msg = error.statusText + ' - An unexpected error happened. Check the logs';
        }

        return Promise.reject(error);
    }

    private convertToArticle(articleObj: any): IArticle {
        const article = new Article();
        article.id = articleObj.id,
        article.title = articleObj.title,
        article.url = articleObj.url,
        article.content = articleObj.content,
        article.publishDate = articleObj.publishDate,
        article.createdAt = articleObj.createdAt,
        article.updatedAt = articleObj.updatedAt,
        article.dataSource = articleObj.dataSource,
        article.banner = articleObj.banner,
        article.author = articleObj.author,
        article.categories = articleObj.categories,
        article.tags = articleObj.tags;

        return article;
    }
}
