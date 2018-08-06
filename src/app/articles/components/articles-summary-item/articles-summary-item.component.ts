import { Component, Input, OnInit, Output } from '@angular/core';

import { Article } from '../../../shared/models';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-articles-summaryitem',
    templateUrl: './articles-summary-item.component.html',
    styleUrls: ['./article-summary-item.component.scss']
})
export class ArticlesSummaryItemComponent {
    @Input() article: Article;
    @Output() select = new EventEmitter();

    public selectArticle() {
        this.select.emit(this.article.id);
    }
}
