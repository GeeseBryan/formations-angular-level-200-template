import { Injectable, isDevMode } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { CharactersDataModelDto } from "./models/characters-data-model-dto";
import { HttpClient } from "@angular/common/http";

export interface GetCharacters<T> {
    getCharacters(): Observable<T>
  }
  
  export interface GetDataCharacters extends GetCharacters<CharactersDataModelDto> {
  }

  const fakeInfra: GetDataCharacters = {
    getCharacters(): Observable<CharactersDataModelDto> {
        const data: CharactersDataModelDto = {results: []};
        return of(data).pipe(delay(1500));
    }
  }

@Injectable({
providedIn: 'root',
useFactory: (httpClient: HttpClient) => isDevMode() ? new CharactersInfrastructure(httpClient): fakeInfra,
deps: [HttpClient]
})

export class CharactersInfrastructure implements GetDataCharacters {
    constructor(private httpClient: HttpClient) { }

    public getCharacters(): Observable<CharactersDataModelDto> {
        const url: string = 'https://swapi.dev/api/people/';
        if (this.httpClient) {
            return this.httpClient.get<CharactersDataModelDto>(url);
        }
        return fakeInfra.getCharacters();
    }
}