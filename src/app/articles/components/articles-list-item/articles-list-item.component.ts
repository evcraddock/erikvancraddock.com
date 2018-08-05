import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Article } from '../../../shared/models';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'articles-listitem',
    templateUrl: './articles-list-item.component.html',
    styleUrls: ['./article-list-item.component.scss']
})
export class ArticlesListItemComponent implements OnInit {
    @Input() article: Article;
    @Output() select = new EventEmitter();
    private bannerUrl;

    constructor(private sanitization: DomSanitizer) { }

    ngOnInit(): void {
        this.bannerUrl = this.sanitization.bypassSecurityTrustStyle(`url(${this.article.banner})`);
    }

    public selectArticle() {
        this.select.emit(this.article.id);
    }
}
