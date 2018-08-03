import { Action } from "@ngrx/store";
import { Article } from "../../shared/models";


export enum ArticleActionTypes {
    Load = '[Article] Load Article',
    LoadSuccess = '[Article] Loaded Successesfully',
    LoadFail = '[Article] Failed to Load',
}

export class Load implements Action {
    readonly type = ArticleActionTypes.Load;
    constructor(public payload: string = null) {}
}

export class LoadSuccess implements Action {
    readonly type = ArticleActionTypes.LoadSuccess;
    constructor(public payload: { articles: Article[] }) {}
}

export class LoadFail implements Action {
    readonly type = ArticleActionTypes.LoadFail;
    constructor(public payload: any) {}
}

export type ArticleActions = 
    Load
    | LoadSuccess
    | LoadFail