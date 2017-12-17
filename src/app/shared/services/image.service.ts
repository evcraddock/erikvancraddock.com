import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import { IArticle } from '../models/article';


@Injectable()
export class ImageService {
    private serverUrl = environment.apiEndpoint;
    constructor(private http: Http) {}

    getBannerImage(article: IArticle) {
        const url = this.serverUrl + '/images/';
        return url + '/' + article.id + '/' + article.banner;
    }

    getLatestImage(collectionName: string) {
        const url = this.serverUrl + '/images/';
        return url + '/' + collectionName + '/latest';
    }
}
