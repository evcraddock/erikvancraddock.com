import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Article } from '../../shared/models';

import { ArticlesActions, ArticlesActionTypes } from '../actions/articles';

export interface State extends EntityState<Article> {
    selectedArticleId: string | null;
}

export const adapter: EntityAdapter<Article> = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id,
    sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
    selectedArticleId: null
});

export function reducer(
    state = initialState,
    action: ArticlesActions
): State {
    switch (action.type) {
        case ArticlesActionTypes.Load: {
            return adapter.removeAll({
                ...state,
            } as State);
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
    }
}

export const getSelectedId = (state: State) => state.selectedArticleId;