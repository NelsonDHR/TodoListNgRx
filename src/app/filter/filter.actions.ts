import { createAction, props } from '@ngrx/store';

export type validFilters= {filtro:'All'|'Completed'|'Active'};

export const setFilter = createAction( '[Filter] Set Filter',props<{filtro: validFilters}>());