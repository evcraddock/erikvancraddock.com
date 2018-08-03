import { Component, Input, OnInit } from '@angular/core';

import { Article } from '../../../shared/models';

@Component({
    selector: 'articles-summaryitem',
    templateUrl: './articles-summary-item.component.html',
    styleUrls: ['./article-summary-item.component.scss']
})
export class ArticlesSummaryItemComponent {
    @Input() article: Article;
}
