import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Article, Page } from '../../shared/models';
import { ArticlesActions, ArticlesActionTypes } from '../actions/articles';

export interface State extends EntityState<Article> {
    selectedArticleId: string | null;
    selectedArticle: Article | null;
    page: Page | null;
}

export const adapter: EntityAdapter<Article> = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id,
    sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
    selectedArticleId: null,
    selectedArticle: null,
    page: {
        pageSize: 2,
        pageIndex: 0,
        startIndex: 0,
        endIndex: 0
    } as Page
});

export function reducer(
    state = initialState,
    action: ArticlesActions
): State {
    switch (action.type) {
        case ArticlesActionTypes.LoadArticle: {
            return {
                ...state,
                selectedArticleId: state.selectedArticleId,
                selectedArticle: null
            };
        }

        case ArticlesActionTypes.Load: {
            return adapter.removeAll({
                ...state,
            });
        }

        case ArticlesActionTypes.LoadSuccess: {
            return adapter.addMany(action.payload.articles, {
                ...state,
                selectedArticleId: null,
                selectedArticle: null,
            } as State);
        }

        case ArticlesActionTypes.LoadFail: {
            return Object.assign({}, {
                ...state
            } as State);
        }

        case ArticlesActionTypes.ChangePage: {
            const index = action.payload;
            const start = index * state.page.pageSize;

            return {
                ...state,
                page: {
                    pageIndex: index,
                    pageSize: state.page.pageSize,
                    startIndex: start,
                    endIndex: start + state.page.pageSize
                } as Page
            };
        }

        case ArticlesActionTypes.SelectArticle: {
            return {
                ...state,
                selectedArticleId: action.payload,
                selectedArticle: null
            };
        }

        case ArticlesActionTypes.SelectArticleSuccess: {
            return {
                ...state,
                selectedArticleId: state.selectedArticleId,
                selectedArticle: action.payload.article
            };
        }

        case ArticlesActionTypes.SelectArticleFail: {
            return {
                ...state
            };
        }

        default: {
            return state;
        }
    }
}

export const getSelectedId = (state: State) => state.selectedArticleId;
export const getPage = (state: State) => state.page;
export const getArticles = (state: State) => state.entities;
