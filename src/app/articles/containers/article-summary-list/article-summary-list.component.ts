import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as fromArticles from '../../reducers';
import * as articlesActions from '../../actions/articles';
import { Article, Page } from '../../../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './article-summary-list.component.html',
  styleUrls: ['./article-summary-list.component.scss']
})
export class ArticleSummaryListComponent implements OnInit {
  articles$: Observable<Article[]> = null;
  articlePage$: Observable<Page> = null;
  pageEvent: PageEvent;

  constructor(private store: Store<fromRoot.State>) {
      this.articles$ = store.pipe(select(fromArticles.getAllArticles));
      this.articlePage$ = store.pipe(select(fromArticles.getArticlePage));
  }

  ngOnInit(): void {
    this.store.dispatch(new articlesActions.Load());
    this.changePage();
  }

  hasArticles() {
    return this.articles$ != null;
  }

  changePage(event?: PageEvent) {
    let pageindex = 0;
    if (event != null) {
      pageindex = event.pageIndex;
    }

    this.store.dispatch(new articlesActions.ChangePage(pageindex));
  }

  public selectArticle(id: string) {
    this.store.dispatch(new articlesActions.SelectArticle(id));
  }
}
