import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

import { ArticlesActionTypes, Load, LoadSuccess } from '../actions/articles';
import { ArticleService } from '../../core/services';
import { Article } from '../../shared/models';

@Injectable()
export class ArticlesEffects {
    @Effect()
    getArticles$: Observable<Action> = this.actions$.pipe(
        ofType(ArticlesActionTypes.Load),
        switchMap((action: Load) => {
            return this.articleService.getArticles()
            .pipe(
                map((res: Article[]) => new LoadSuccess({
                    articles: res
                }))
            )
        })
    );

    constructor(
        private actions$: Actions,
        private articleService: ArticleService
    ) {}
}