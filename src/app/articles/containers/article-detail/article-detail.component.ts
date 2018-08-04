import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../../../shared/models';
import { Profile } from '../../../shared/models/profile';
import { ImageService } from '../../../core/services/image.service';

import * as marked from 'marked';
import { Observable } from 'rxjs';

import * as fromRoot from '../../../reducers';
import * as fromArticles from '../../reducers';
import { Store, select } from '@ngrx/store';
import * as articlesActions from '../../actions/articles';

@Component({
  selector: 'app-news-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article$: Observable<Article>;
  articleId$: Observable<string>;
  protected profile: Profile = null;

  constructor(private store: Store<fromRoot.State>) {
      this.article$ = store.pipe(select(fromArticles.getSelectedArticle));
  }

  ngOnInit() {
    this.profile = Profile.getDefaultProfile();
    this.store.dispatch(new articlesActions.LoadArticle());
  }
}
