import { Component, Input } from '@angular/core';

import { IArticle } from '../shared/models/index';
import { ArticleService } from '../shared/services/';
import { SafeStyle } from '@angular/platform-browser';
import { ImageService } from '../shared/services/image.service';

@Component({
    selector: 'articles-listitem',
    templateUrl: './articles-list-item.component.html',
    styleUrls: ['./article-list-item.component.scss']
})
export class ArticlesListItemComponent {
    public image: SafeStyle;
    @Input() article: IArticle;

    constructor(private imageService: ImageService) { }

    getBanner() {
        return this.imageService.getBannerImage(this.article);
    }
}
