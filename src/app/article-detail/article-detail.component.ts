import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IArticle } from '../shared/models/index';
import { ImageService } from '../shared/services';

@Component({
  selector: 'app-news-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article: IArticle = <IArticle>{};
//   links: ILink[] = [];

  constructor(private route: ActivatedRoute, private imageService: ImageService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    if (this.route.data) {
      this.route.data.forEach(data => {
        if (data['article'] instanceof Array && data['article'].length > 0) {
          this.article = data['article'][0];
        }

        // if (data['links'] instanceof Array && data['links'].length > 0) {
        //   this.links = data['links'];
        // }
      });
    }
  }

  getBannerImage() {
    return this.imageService.getBannerImage(this.article);
  }
}
