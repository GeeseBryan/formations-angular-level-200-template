import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { speciesReducer, SpeciesState } from '../features/game/store';

export interface ApplicationState {
  species: SpeciesState;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  species: speciesReducer,
};

export const metaReducers: MetaReducer<ApplicationState>[] = isDevMode()
  ? []
  : [];
