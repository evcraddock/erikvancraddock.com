import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IArticle } from '../shared/models/index';
import { ImageService } from '../shared/services';

import * as marked from 'marked';

@Component({
  selector: 'app-news-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  protected article: IArticle = <IArticle>{};
  protected articleHtml = '';
//   links: ILink[] = [];

  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    if (this.route.data) {
      this.route.data.forEach(data => {
        if (data['article'] instanceof Array && data['article'].length > 0) {
          this.article = data['article'][0];
          this.transformContent(this.article);
        }
      });
    }
  }

  transformContent(article: IArticle) {
    const renderer = new marked.Renderer();
    const url = this.imageService.serverUrl + '/images/' + article.id;
    renderer.paragraph = function (text: string) {
        const regimg = /{imageservice}/gi;
        const imgtext = text.replace(regimg, url);

        const regid = /{articleid}/gi;
        const newtext = imgtext.replace(regid, article.id);

        return '<p class="article-entry">' + newtext + '</p>'
    }

    this.articleHtml = marked(article.content, { renderer: renderer }) ;
  }

  getBannerImage() {
    return this.imageService.getBannerImage(this.article);
  }
}
