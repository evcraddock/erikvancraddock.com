import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import { IArticle } from '../models/article';

@Injectable()
export class ImageService {
    public serverUrl = environment.apiEndpoint;
    constructor(
        // private http: Http
    ) {}

    getBannerImage(article: IArticle) {
        return this.serverUrl + '/articles/' + article.id + '/images/' + article.banner;
    }

    getImage(articleId: string, imageName: string) {
        return this.serverUrl + '/articles/' + articleId + '/images/' + imageName;
    }

    getLatestImage(collectionName: string) {
        const url = this.serverUrl + '/images/';
        return url + '/' + collectionName + '/latest';
    }
}
