import { Injectable } from '@angular/core';
import { IArticle } from '../models/article';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { AuthService } from './auth.service';

@Injectable()
export class ArticleService {

    private serverUrl = environment.apiEndpoint;
    constructor(private http: HttpClient, private authorizationService: AuthService) {}

    getArticle(id: string): Observable<IArticle> {
        return this.http.get(this.serverUrl + '/articles/' + id).pipe(map((response: Response) => {
            return this.convertToArticle(response.json());
        }),
        catchError(this.handleArticleError));
    }

    getArticles(params?: HttpParams): Observable<IArticle[]> {
        const url = this.serverUrl + '/articles';
        
        // let token = this.authorizationService.getToken();
        


        // const headers = new HttpHeaders();
        // headers.set('Authorization', 'bearer ' + token)
        
        const request = this.http.get(url, { 
            responseType: 'json',
            params: params
            // headers: headers
        });

        return request.pipe(
            map((response: HttpResponse<IArticle[]>) => {
            return response.body;
        }));
        // ,
        // catchError((error: Response) => {
        //     let msg = '';
        //     if (error.status === 404) {
        //         msg = 'Not able to connect to the article server, try again later';
        //     } else {
        //         msg = error.statusText + ' - An unexpected error happened. Check the logs';
        //     }
            
        //     return Promise.reject(error);
        // }));
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
