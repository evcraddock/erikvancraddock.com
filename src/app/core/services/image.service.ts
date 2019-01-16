import { Injectable } from '@angular/core';
import { IArticle } from '../../shared/models';
import { ConfigService } from './config.service';

@Injectable()
export class ImageService {
    constructor(private environment: ConfigService) {}

    getBannerImage(article: IArticle) {
        return this.environment.config.apiEndpoint + '/articles/' + article.id + '/images/' + article.banner;
    }

    getImage(articleId: string, imageName: string) {
        return this.environment.config.apiEndpoint + '/articles/' + articleId + '/images/' + imageName;
    }

    getArticleImageServerUrl(articleId: string) {
        return this.environment.config.apiEndpoint + '/articles/' + articleId + '/images';
    }

    getLatestImage(collectionName: string) {
        const url = this.environment.config.apiEndpoint + '/images/';
        return url + '/' + collectionName + '/latest';
    }
}
