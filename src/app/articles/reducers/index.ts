import * as fromRoot from '../../reducers';
import * as fromArticles from './articles';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface ArticlesState {
    articles: fromArticles.State;
}

export interface State extends fromRoot.State {
    articles: ArticlesState;
}

export const reducers: ActionReducerMap<ArticlesState> = {
    articles: fromArticles.reducer,
};

export const getArticlesState = createFeatureSelector<ArticlesState>('articles');

export const getArticlesEntities = createSelector(
    getArticlesState,
    state => state.articles
);



export const getSelectedArticleId = createSelector(
    getArticlesEntities,
    fromArticles.getSelectedId
);

export const getArticles = createSelector(
    getArticlesEntities,
    state => state.entities
);

export const getSelectedArticle = createSelector(
    getArticlesEntities,
    state => state.selectedArticle
);

export const getArticlePage = createSelector(
    getArticlesEntities,
    fromArticles.getPage
);

export const {
    selectIds: getArticleIds,
    selectEntities: getArticleEntities,
    selectAll: getAllArticles,
    selectTotal: getTotalArticles,
} = fromArticles.adapter.getSelectors(getArticlesEntities);
