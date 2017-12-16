import { Component, Input } from '@angular/core';
import { IArticle } from '../shared/models/index';
import { ArticleService } from '../shared/services/';

@Component({
    selector: 'articles-listitem',
    templateUrl: './articles-list-item.component.html'
})
export class ArticlesListItemComponent {
    @Input() article: IArticle;

    constructor(private articleService: ArticleService) { }

    getBanner() {
        return this.articleService.getBannerImage(this.article);
    }
}
