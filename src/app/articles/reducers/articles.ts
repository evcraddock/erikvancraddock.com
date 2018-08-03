import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Article, Page } from '../../shared/models';

import { ArticlesActions, ArticlesActionTypes } from '../actions/articles';

export interface State extends EntityState<Article> {
    selectedArticleId: string | null;
    page: Page | null;
}

export const adapter: EntityAdapter<Article> = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id,
    sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
    selectedArticleId: null,
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
        case ArticlesActionTypes.Load: {
            return {
                ...state,
            };
        }

        case ArticlesActionTypes.LoadSuccess: {
            return adapter.addMany(action.payload.articles, {
                ...state,
                selectedArticleId: state.selectedArticleId
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
            }
        }
    }
}

export const getSelectedId = (state: State) => state.selectedArticleId;
export const getPage = (state: State) => state.page;