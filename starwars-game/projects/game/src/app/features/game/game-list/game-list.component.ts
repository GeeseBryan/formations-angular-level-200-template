import { Component, inject, OnInit } from '@angular/core';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { ApplicationState } from '../../../reducers';
import { Store } from '@ngrx/store';
import { addNewSpeciesAction, WithSpecies } from '../store/species.actions';
import { SpeciesDto } from '../models/species.dto';
import { selectAllSpecies } from '../store/species.selectors';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {
  games: GameDto[] = [];
  searchItem = '';
  public species: SpeciesDto[] = [];

  private readonly speciesStore = inject(Store<ApplicationState>);

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getAll(3).subscribe((items) => (this.games = items));

    this.speciesStore.select(selectAllSpecies).subscribe((species) => {
      this.species = species;
    });
  }

  public fillSpecies(): void {
    const species: WithSpecies = {
      item: {
        id: Math.floor(Math.random() * 100),
        name: 'Human',
      },
    };
    this.speciesStore.dispatch(addNewSpeciesAction(species));
  }
}
