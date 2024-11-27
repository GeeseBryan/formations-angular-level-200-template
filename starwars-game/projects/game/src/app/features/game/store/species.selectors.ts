import { createSelector } from '@ngrx/store';
import { ApplicationState } from '../../../reducers';

const selectSpeciesState = (state: ApplicationState) => state.species;

export const selectAllSpecies = createSelector(
  selectSpeciesState,
  (state) => state.items
);
