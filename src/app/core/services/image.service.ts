import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IArticle } from '../../shared/models';

@Injectable()
export class ImageService {
    public serverUrl = 'http://' + environment.apiEndpoint + '/api/';
    constructor() {}

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
