import { Component, Input } from '@angular/core';

import { IArticle } from '../shared/models/index';
import { ArticleService } from '../shared/services/';
import { SafeStyle } from '@angular/platform-browser';
import { ImageService } from '../shared/services/image.service';

@Component({
    selector: 'articles-summaryitem',
    templateUrl: './articles-summary-item.component.html',
    styleUrls: ['./article-summary-item.component.scss']
})
export class ArticlesSummaryItemComponent {
    public image: SafeStyle;
    @Input() article: IArticle;

    constructor(
        private imageService: ImageService
    ) { }

    getBanner() {
        return this.imageService.getBannerImage(this.article);
    }

    getContentSummarybyLenght(): string {
        let sumlen = 500;
        if (this.article.content.length < sumlen) {
            sumlen = this.article.content.length;
        }

        return this.article.content.slice(0, sumlen);
    }

    getContentSummary(): string {
        const summarray = this.article.content.split('\n');

        return summarray[0];
    }
}
