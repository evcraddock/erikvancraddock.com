import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store, Action, select } from '@ngrx/store';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, map, withLatestFrom, tap, first } from 'rxjs/operators';
import * as marked from 'marked';

import { Article, IArticle } from '../../shared/models';
import {
    ArticlesActionTypes,
    LoadSuccess,
    LoadFail,
    SelectArticle,
    SelectArticleSuccess,
    SelectArticleFail,
} from '../actions/articles';
import { ArticleService } from '../../core/services/article.service';
import { ImageService } from '../../core/services/image.service';
import * as fromRoot from '../../reducers';
import * as fromArticles from '../reducers';

@Injectable()
export class ArticlesEffects {
    @Effect()
    getArticles$: Observable<Action> = this.actions$.pipe(
        ofType(ArticlesActionTypes.Load),
        withLatestFrom(this.store$.pipe(select(fromRoot.getRouterState))),
        switchMap(([action, state]) => {
            let params = null;
            if (state.state.params['category']) {
                const cat: string = state.state.params['category'];
                params = new HttpParams().set('categories', cat);
            }
            return this.articleService.getArticles(params)
            .pipe(
                map((res: Article[]) => {
                    const articles: Article[] = [];
                    for (const item of res) {
                        const article = Article.mapFrom(item);
                        article.banner = this.imageService.getBannerImage(article);
                        articles.push(article);
                    }
                    const payload = {
                        articles: articles
                    };

                    return new LoadSuccess(payload);
                }
            ));
        }),
        catchError(error => of(new LoadFail(error)))
    );

    @Effect()
    LoadArticle$: Observable<Action> = this.actions$.pipe(
        ofType(ArticlesActionTypes.LoadArticle),
        withLatestFrom(this.store$.pipe(select(fromRoot.getRouterState))),
        switchMap(([action, state]) => {
            let params = null;
            if (state.state.params['permalink']) {
                const url: string = state.state.params['permalink'];
                params = new HttpParams().set('url', url);
            }

            return this.articleService.getArticles(params)
            .pipe(
                map((res: Article[]) => {

                    const article = Article.mapFrom(res[0]);
                    article.banner = this.imageService.getBannerImage(article);
                    article.content = this.transformContent(article);

                    return new SelectArticleSuccess({article: article});
                })
            );
        }),
        catchError(error => of(new SelectArticleFail(error)))
    );

    @Effect({dispatch: false})
    SelectArticle$: Observable<[Action, Article | any]> = this.actions$.pipe(
        ofType(ArticlesActionTypes.SelectArticle),
        withLatestFrom(this.store$.pipe(select(fromArticles.getArticlesEntities))),
        tap(([action, articles]) => {
            const saction = action as SelectArticle;
            const article: Article = articles.entities[saction.payload];
            this.router.navigate(['/articles/' + article.url]);
        })
    );

    transformContent(article: Article) {
        const renderer = new marked.Renderer();
        const url = this.imageService.serverUrl + '/images/' + article.id;
        renderer.paragraph = function (text: string) {
            const regimg = /{imageservice}/gi;
            const imgtext = text.replace(regimg, url);
            const regid = /{articleid}/gi;
            const newtext = imgtext.replace(regid, article.id);
            return '<p class="article-entry">' + newtext + '</p>';
        };

        return marked(article.content, { renderer: renderer }) ;
      }

    constructor(
        private store$: Store<fromRoot.State>,
        private actions$: Actions,
        private articleService: ArticleService,
        private router: Router,
        private imageService: ImageService
    ) {}
}
