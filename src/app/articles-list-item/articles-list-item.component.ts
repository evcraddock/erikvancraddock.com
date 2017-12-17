import { Component, Input } from '@angular/core';

import { IArticle } from '../shared/models/index';
import { ArticleService } from '../shared/services/';
import { SafeStyle } from '@angular/platform-browser';

@Component({
    selector: 'articles-listitem',
    templateUrl: './articles-list-item.component.html',
    styleUrls: ['./article-list-item.component.scss']
})
export class ArticlesListItemComponent {
    public image: SafeStyle;
    @Input() article: IArticle;

    constructor(private articleService: ArticleService) { }

    getBanner() {
        return this.articleService.getBannerImage(this.article);
    }

    getBannerStyle() {
        const imgUrl = this.articleService.getBannerImage(this.article);

        // "background-image:url(http://localhost:9000/images/{{article.id}}/burnout.png)"

        return 'background-image:url(' + imgUrl + ')';
    }
}
