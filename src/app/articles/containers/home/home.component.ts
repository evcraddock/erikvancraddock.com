import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../../shared/models';
import { Profile } from '../../../shared/models/profile';
import { PageEvent } from '@angular/material';
import { ImageService } from '../../../core/services/image.service';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as fromArticles from '../../reducers';
import { Observable } from 'rxjs';
import * as articlesActions from '../../actions/articles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.scss'
})
export class ArtComponent implements OnInit {
  articles$: Observable<Article[]>;
  
  profile: Profile = null;
  pagesize = 5;
  pageIndex = 0;
  pageEvent: PageEvent;
  startIndex = 0;
  endIndex = 0;
  
  public articles: Article[] = [];

  constructor(
    private store: Store<fromRoot.State>,
    private route: ActivatedRoute,
    private imageService: ImageService
  ) {
      this.articles$ = store.pipe(select(fromArticles.getAllArticles));
  }

  ngOnInit(): void {
    this.profile = Profile.getDefaultProfile();
    this.store.dispatch(new articlesActions.Load());
    // this.loadArticles();
    this.changePage();
  }

  hasArticles() {
    return this.articles.length > 0;
  }

  loadArticles() {
    this.articles$.subscribe((articles: Article[]) => {

    });
  }

  loadArticles1() {
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

    this.startIndex = this.pageIndex * this.pagesize;
    this.endIndex = this.startIndex + this.pagesize;

    // this.pagedArticles = this.articles.slice(startIndex, endIndex);
  }
}
