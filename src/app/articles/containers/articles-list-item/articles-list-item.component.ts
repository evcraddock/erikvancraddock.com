import { Component, Input, OnInit } from '@angular/core';

import { IArticle } from '../../../shared/models';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { ImageService } from '../../../core/services/image.service';

@Component({
    selector: 'articles-listitem',
    templateUrl: './articles-list-item.component.html',
    styleUrls: ['./article-list-item.component.scss']
})
export class ArticlesListItemComponent implements OnInit {
    
    @Input() article: IArticle;
    private bannerUrl;

    constructor(
        private imageService: ImageService,
        private sanitization: DomSanitizer
    ) { }

    getBanner() {
        return this.imageService.getBannerImage(this.article);
    }

    ngOnInit(): void {
        this.bannerUrl = this.sanitization.bypassSecurityTrustStyle(`url(${this.getBanner()})`);
    }
}
