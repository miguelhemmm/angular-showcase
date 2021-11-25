import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeList, PokemonGridService, PokemonOverall } from './pokemon-grid.service';

@Component({
  selector: 'app-pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.scss']
})
export class PokemonGridComponent implements OnInit {

  constructor(private pokemon: PokemonGridService) { }

  pokemonList: PokemonOverall[] = [];
  nextUrl: string = '';
  previousUrl: string = '';
  pokemonImg: PokemonImg[] = [];
  modalOpened: boolean = false;
  selectedPokemon: any;

  ngOnInit(): void {

    this.pokemon.getPokemon().subscribe((list) => {
      this.setPokemonParameters(list);
    })

  }

  nextPokemon() {
    this.pokemon.nextPokemon(this.nextUrl).subscribe(pokemons => {
      this.setPokemonParameters(pokemons);
    })
  }

  previousPokemon() {
    this.pokemon.nextPokemon(this.previousUrl).subscribe(pokemons => {
      this.setPokemonParameters(pokemons);
    })
  }


  getPokemonImg(num: number): Observable<any> {
    return this.pokemon.getPokemonImg(num);
  }

  setPokemonParameters(pokemons: PokeList) {
    const pokemonImg: any[] = [];
    this.nextUrl = pokemons.next;
    this.previousUrl = pokemons.previous;
    this.pokemonList = pokemons.results;

    this.pokemonList.forEach((pokemon: any) => {
      this.pokemon.getPokemonImg(pokemon.name).subscribe((data: any) => {
        pokemonImg.push(data)
        this.pokemonImg = pokemonImg.map(data => {
          return {
            id: data.id,
            name: data.name,
            sprite: data.sprites.front_default,
            height: data.height,
            experience: data.base_experience,
            types: data.types
          }
        }).sort((a, b) => (a.id) - (b.id));
      })
    })
}

  getPokemonInfo(i: any) {
    this.modalOpened = true;
    this.selectedPokemon = this.pokemonImg[i];
  console.log(this.pokemonImg[i], i)
  }

  close() {
    this.modalOpened = false;
  }

}

interface PokemonImg {
  id: number;
  name: string;
  sprite: string;
}
