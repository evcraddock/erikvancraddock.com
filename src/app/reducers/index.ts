import {
    ActionReducerMap,
    ActionReducer,
    MetaReducer,
    createFeatureSelector,
    createSelector,
  } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { RouterStateUrl } from '../shared/models/route-state';
import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

export interface State {
    router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
    router: fromRouter.routerReducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('router');
export const getRouteCategory = createSelector(
  getRouterState,
  state => state.state.params['category']
);
