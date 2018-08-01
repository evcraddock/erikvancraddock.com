import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../../shared/models';
import { Profile } from '../../../shared/models/profile';
import { PageEvent } from '@angular/material';
import { ImageService } from '../../../core/services/image.service';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as fromArticles from '../../reducers';
import { Observable } from '../../../../../node_modules/rxjs';
import * as articlesActions from '../../actions/articles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.scss'
})
export class ArtComponent implements OnInit {
  public articles: Article[] = [];
  public profile: Profile = null;
  public pagedArticles: Article[] = [];
  public pagesize = 5;
  public pageIndex = 0;
  public pageEvent: PageEvent;
  articles$: Observable<Article[]>;


  constructor(
    private store: Store<fromRoot.State>,
    private route: ActivatedRoute,
    private imageService: ImageService
  ) {
    this.articles$ = store.pipe(select(fromArticles.getAllArticles));
  }

  ngOnInit(): void {
    this.profile = Profile.getDefaultProfile();
    this.store.dispatch(new articlesActions.Load('work'));
    // this.loadArticles();
    // this.changePage();
  }

  hasArticles() {
    return this.articles.length > 0;
  }

  loadArticles() {
    if (this.route.data) {
      this.route.data.forEach(data => {
        if (data['articles'] instanceof Array && data['articles'].length > 0) {
          for (let item of data['articles']) {
            const article = Article.mapFrom(item);
            article.banner = this.imageService.getBannerImage(article);

            this.articles.push(article);
          }
        }
      });
    }
  }

  changePage(event?: PageEvent) {
    if (event != null) {
      this.pageIndex = event.pageIndex;
    }
    const startIndex = this.pageIndex * this.pagesize;
    const endIndex = startIndex + this.pagesize;

    this.pagedArticles = this.articles.slice(startIndex, endIndex);
  }
}
