import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { switchMap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PokemonGridService {

  constructor(private http: HttpClient) { }

  pokemonImg = new BehaviorSubject<string[]>([]);



  getPokemon(): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=24`)
  }

  nextPokemon(url: string): Observable<any> {
    return this.http.get(url);
  }

  previousPokemon(url: string): Observable<any> {
    return this.http.get(url);
  }

  getPokemonImg(pokenum: number): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokenum}`);
  }
}
