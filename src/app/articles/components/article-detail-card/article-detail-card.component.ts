import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../../shared/models';

@Component({
    selector: 'articles-detailcard',
    templateUrl: './article-detail-card.component.html',
    styleUrls: ['./article-detail-card.component.scss']
})
export class ArticlesDetailCardComponent {
    @Input() article: Article;
}
