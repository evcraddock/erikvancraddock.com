import { Injectable } from '@angular/core';
import { IArticle } from '../../shared/models/article';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class ArticleService {

    private serverUrl = environment.apiEndpoint;
    constructor(private http: HttpClient, private authorizationService: AuthService) {}

    getArticles(params?: HttpParams): Observable<IArticle[]> {
        this.authorizationService.loadToken();
        const url = this.serverUrl + '/articles';

        return this.http.get<IArticle[]>(url, {
            params: params
        });
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
        const article: IArticle = {
            id: articleObj.id,
            title: articleObj.title,
            url: articleObj.url,
            content: articleObj.content,
            publishDate: articleObj.publishDate,
            createdAt: articleObj.createdAt,
            updatedAt: articleObj.updatedAt,
            dataSource: articleObj.dataSource,
            banner: articleObj.banner,
            author: articleObj.author,
            categories: articleObj.categories,
            tags: articleObj.tags
        };

        return article;
    }
}
