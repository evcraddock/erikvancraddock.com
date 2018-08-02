import { Action } from '@ngrx/store';
import { Article } from '../../shared/models';

export enum ArticlesActionTypes {
    Load = '[Articles] Load Article List',
    LoadSuccess = '[Articles] Load List Successesfully',
    LoadFail = '[Articles] Failed to Load List',
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

export type ArticlesActions = 
    Load
    | LoadSuccess
    | LoadFail