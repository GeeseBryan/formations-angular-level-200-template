import { createReducer, on } from '@ngrx/store';
import { SpeciesDto } from '../models/species.dto';
import { addNewSpeciesAction } from './species.actions';

export interface SpeciesState {
  items: SpeciesDto[];
}

const initState: SpeciesState = {
  items: [],
};

export const speciesReducer = createReducer(
  initState,
  on(addNewSpeciesAction, (oldState, action) => {
    const newVersionOfState: SpeciesState = {
      items: [...oldState.items, action.item],
    };
    return newVersionOfState;
  })
);
