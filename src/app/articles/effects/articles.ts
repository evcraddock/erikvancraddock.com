import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

import { ArticlesActionTypes, Load, LoadSuccess, LoadFail } from '../actions/articles';
import { ArticleService } from '../../core/services/article.service';

import { Article } from '../../shared/models';

@Injectable()
export class ArticlesEffects {
    @Effect()
    getArticles$: Observable<Action> = this.actions$.pipe(
        ofType<Load>(ArticlesActionTypes.Load),
        map(action => action.payload),
        switchMap(() => {
            return this.articleService.getArticles()
            .pipe(
                map((res: Article[]) => { 
                    const payload = {
                        articles: res
                    }

                    return new LoadSuccess(payload);
                }
            ))
        })
    );

    constructor(
        private actions$: Actions,
        private articleService: ArticleService
    ) {}
}