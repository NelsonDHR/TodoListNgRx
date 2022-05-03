import { Action, createReducer,on } from "@ngrx/store";
import * as actions from './filter.actions';
import { validFilters } from './filter.actions';


export const initialState: actions.validFilters={filtro:"All"};

const _filterReducer= createReducer(initialState,
    on(actions.setFilter, (state,{filtro})=>filtro),
    );

export function filterReducer(state: any,action: Action){
    return _filterReducer(state,action);
}

