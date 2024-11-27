import { createAction, props } from '@ngrx/store';
import { SpeciesDto } from '../models/species.dto';

export type WithSpecies = {
  item: SpeciesDto;
};

export const addNewSpeciesAction = createAction(
  'Add a new species in the store',
  props<WithSpecies>()
);
