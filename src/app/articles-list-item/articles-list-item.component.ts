import { Component, Input, OnInit } from '@angular/core';

import { IArticle } from '../shared/models';
import { ArticleService } from '../shared/services';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { ImageService } from '../shared/services/image.service';

@Component({
    selector: 'articles-listitem',
    templateUrl: './articles-list-item.component.html',
    styleUrls: ['./article-list-item.component.scss']
})
export class ArticlesListItemComponent implements OnInit {
    
    
    public image: SafeStyle;
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
        const imgurl = this.getBanner();
        this.bannerUrl = this.sanitization.bypassSecurityTrustStyle(`url(${imgurl})`);

        this.bannerUrl = this.sanitization.bypassSecurityTrustStyle('url('+ imgurl + ')');
    }
}
