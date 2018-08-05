import { Action } from '@ngrx/store';
import { Article } from '../../shared/models';

export enum ArticlesActionTypes {
    LoadArticle = '[Articles] Load Article',
    Load = '[Articles] Load Article List',
    LoadSuccess = '[Articles] Load List Successesfully',
    LoadFail = '[Articles] Failed to Load List',
    ChangePage = '[Articles] Change Page',
    SelectArticle = '[Articles] Set Selected Article',
    SelectArticleSuccess = '[Articles] Set Selected Article Successfully',
    SelectArticleFail = '[Articles] Failed to Set Selected Article',
}

export class LoadArticle implements Action {
    readonly type = ArticlesActionTypes.LoadArticle;
}

export class Load implements Action {
    readonly type = ArticlesActionTypes.Load;
    constructor(public payload: string = null) {}
}

export class LoadSuccess implements Action {
    readonly type = ArticlesActionTypes.LoadSuccess;
    constructor(public payload: { articles: Article[] }) {}
}

export class LoadFail implements Action {
    readonly type = ArticlesActionTypes.LoadFail;
    constructor(public payload: any) {}
}

export class ChangePage implements Action {
    readonly type = ArticlesActionTypes.ChangePage;
    constructor(public payload: number) {}
}

export class SelectArticle implements Action {
    readonly type = ArticlesActionTypes.SelectArticle;
    constructor(public payload: string) {}
}

export class SelectArticleSuccess implements Action {
    readonly type = ArticlesActionTypes.SelectArticleSuccess;
    constructor(public payload: { article: Article }) {}
}

export class SelectArticleFail implements Action {
    readonly type = ArticlesActionTypes.SelectArticleFail;
    constructor(public payload: any) {}
}

export type ArticlesActions =
    LoadArticle
    | Load
    | LoadSuccess
    | LoadFail
    | ChangePage
    | SelectArticle
    | SelectArticleSuccess
    | SelectArticleFail;
