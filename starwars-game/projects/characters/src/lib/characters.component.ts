import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CharactersInfrastructure } from './characters.infrastructure';
import { CharactersModel } from './models/characters-model';
import { CharactersDataModelDto } from './models/characters-data-model-dto';
import { CharactersModelDto } from './models/characters-model-dto';

@Component({
  selector: 'list-characters',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl:'./characters.component.html',
  styles: ['./characters.component.css']
})

export class CharactersComponent {
  private readonly charactersInfra = inject(CharactersInfrastructure);
  public dataCharacters: CharactersModel[] = [];
  characters$ = this.charactersInfra.getCharacters();

  public ngOnInit() {
    this.characters$.subscribe((data) => {
      this.dataCharacters = this.charactersDtoToCharacters(data);
    });
  }

    private charactersDtoToCharacters(charactersDataModelDto: CharactersDataModelDto): CharactersModel[] {
      if (!charactersDataModelDto.results) {
          return [];
      }

      return charactersDataModelDto.results.map((characterDto: CharactersModelDto): CharactersModel => {
          return {
              id: characterDto.id || undefined,
              surname: characterDto.name,
              birthYear: characterDto.birth_year
          };
      });
  }
}
