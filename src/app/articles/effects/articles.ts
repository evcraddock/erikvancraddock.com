import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store, Action, select } from '@ngrx/store';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, map, withLatestFrom, tap } from 'rxjs/operators';

import { Article } from '../../shared/models';
import { ArticlesActionTypes, Load, LoadSuccess, LoadFail, SelectArticle, SelectArticleSuccess, SelectArticleFail } from '../actions/articles';
import { ArticleService } from '../../core/services/article.service';
import { ImageService } from '../../core/services/image.service';
import * as fromRoot from '../../reducers';

@Injectable()
export class ArticlesEffects {
    @Effect()
    getArticles$: Observable<Action> = this.actions$.pipe(
        ofType(ArticlesActionTypes.Load),
        withLatestFrom(this.store$.pipe(select(fromRoot.getRouterState))),
        switchMap(([action, state]) => {
            let params = null;
            if (state.state.params['category']) {
                const cat : string = state.state.params['category'];
                params = new HttpParams().set('categories', cat);
            }
            return this.articleService.getArticles(params)
            .pipe(
                map((res: Article[]) => { 
                    const articles: Article[] = []
                    for (let item of res) {
                        const article = Article.mapFrom(item);
                        article.banner = this.imageService.getBannerImage(article);
            
                        articles.push(article);
                    }
                                        
                    const payload = {
                        articles: articles
                    }

                    return new LoadSuccess(payload);
                }
            ))
        }),
        catchError(error => of(new LoadFail(error)))
    );

    @Effect()
    SelectArticle$: Observable<Action> = this.actions$.pipe(
        ofType(ArticlesActionTypes.SelectArticle),
        switchMap((action: SelectArticle) => {
            return this.articleService.getArticle(action.payload)
            .pipe(
                map((res: Article) => {
                    const article = Article.mapFrom(res);
                    article.banner = this.imageService.getBannerImage(article);

                    return new SelectArticleSuccess({article: article})
                })
            )
        }),
        catchError(error => of(new SelectArticleFail(error)))
    )

    @Effect({dispatch: false})
    selectArticleSuccess$: Observable<Action> = this.actions$.pipe(
        ofType(ArticlesActionTypes.SelectArticleSuccess),
        tap((action: SelectArticleSuccess) => {
            this.router.navigate(['/articles/' + action.payload.article.url])
        })
    );

    constructor(
        private store$: Store<fromRoot.State>,
        private actions$: Actions,
        private articleService: ArticleService,
        private router: Router,
        private imageService: ImageService
    ) {}
}