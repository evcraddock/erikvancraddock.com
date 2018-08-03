import { Component, Input, OnInit } from '@angular/core';

import { Article } from '../../models';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'articles-listitem',
    templateUrl: './articles-list-item.component.html',
    styleUrls: ['./article-list-item.component.scss']
})
export class ArticlesListItemComponent implements OnInit {
    
    @Input() article: Article;
    private bannerUrl;

    constructor(
        private sanitization: DomSanitizer
    ) { }

    ngOnInit(): void {
        this.bannerUrl = this.sanitization.bypassSecurityTrustStyle(`url(${this.article.banner})`);
    }
}
