import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import { IArticle } from '../models/article';

@Injectable()
export class ImageService {
    public serverUrl = environment.apiEndpoint;
    constructor(private http: Http) {}

    getBannerImage(article: IArticle) {
        const url = this.serverUrl + '/images/';
        return url + '/' + article.id + '/' + article.banner;
    }

    getImage(articleId: string, imageName: string) {
        const url = this.serverUrl + '/images/';
        return url + '/' + articleId + '/' + imageName;
    }

    getLatestImage(collectionName: string) {
        const url = this.serverUrl + '/images/';
        return url + '/' + collectionName + '/latest';
    }
}
