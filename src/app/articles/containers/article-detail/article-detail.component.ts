import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../../../shared/models';
import { Profile } from '../../../shared/models/profile';
import { ImageService } from '../../../core/services/image.service';

import * as marked from 'marked';

@Component({
  selector: 'app-news-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  protected article: Article = <Article>{};
  protected articleHtml = '';
  protected profile: Profile = null;

  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService
  ) { }

  ngOnInit() {
    this.profile = Profile.getDefaultProfile();
    this.loadData();
  }

  loadData() {
    if (this.route.data) {
      this.route.data.forEach(data => {
        if (data['article'] instanceof Array && data['article'].length > 0) {
          this.article = Article.mapFrom(data['article'][0]);
          this.article.banner = this.imageService.getBannerImage(this.article);
          this.transformContent(this.article);
        }
      });
    }
  }

  transformContent(article: Article) {
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
}
