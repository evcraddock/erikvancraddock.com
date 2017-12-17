import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IArticle } from '../models/article';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';

@Injectable()
export class ArticleService {

    private serverUrl = environment.apiEndpoint;
    constructor(private http: Http) {}

    getArticle(id: string): Observable<IArticle> {
        return this.http.get(this.serverUrl + '/articles/' + id).map((response: Response) => {
            return this.convertToArticle(response.json());
        })
        .catch(this.handleArticleError);
    }

    getArticles(params?: URLSearchParams): Observable<IArticle[]> {
        const url = this.serverUrl + '/articles';
        const request = this.http.get(url, { search: params });

        return request.map((response: Response) => {
            const articles: IArticle[] = [];
            response.json().forEach(element => {
                articles.push(this.convertToArticle(element));
            });

            return articles;
        })
        .catch((error: Response) => {
            let msg = '';
            if (error.status === 404) {
                msg = 'Not able to connect to the article server, try again later';
            } else {
                msg = error.statusText + ' - An unexpected error happened. Check the logs';
            }

            // this.errorService.updateMessage(msg);
            return Promise.reject(error);
        });
    }

    private handleArticleError(error: Response) {
        let msg = '';
        if (error.status === 404) {
            msg = 'Not able to connect to the article server, try again later';
        } else {
            msg = error.statusText + ' - An unexpected error happened. Check the logs';
        }

        // this.errorService.updateMessage(msg);
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
