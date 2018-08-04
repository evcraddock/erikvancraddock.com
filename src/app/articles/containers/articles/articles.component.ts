import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Article, Page } from '../../../shared/models';
import { Profile } from '../../../shared/models/profile';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { PageEvent } from '@angular/material';

import * as fromRoot from '../../../reducers';
import * as fromArticles from '../../reducers';
import { Observable } from 'rxjs';
import * as articlesActions from '../../actions/articles';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: [ './articles.component.scss' ]
})
export class ArticlesComponent implements OnInit {
  articles$: Observable<Article[]>;
  articlePage$: Observable<Page> = null;
  category$: Observable<string> = null;
  public profile: Profile;
  public pageEvent: PageEvent;
  

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
  ) {
      this.articles$ = store.pipe(select(fromArticles.getAllArticles));
      this.articlePage$ = store.pipe(select(fromArticles.getArticlePage));
      this.category$ = store.pipe(select(fromRoot.getRouteCategory));

      this.router.routeReuseStrategy.shouldReuseRoute = function(){
        return false;
      };

      this.router.events.subscribe((evt) => {
          if (evt instanceof NavigationEnd) {
            this.router.navigated = false;
            window.scrollTo(0, 0);
          }
      });
  }

  ngOnInit(): void {
    this.profile = Profile.getDefaultProfile();
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

    this.store.dispatch(new articlesActions.ChangePage(pageindex))
  }

  public selectArticle(id: string) {
    this.store.dispatch(new articlesActions.SelectArticle(id));
  }
}
