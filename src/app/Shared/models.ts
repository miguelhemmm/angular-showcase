
export interface PokemonOverall {
  name: string;
  url: string;
}
export interface PokeList {
  count: number;
  next: string;
  previous: string;
  results: Array<PokemonOverall>
}

export interface User {
  name: string;
  id: string;
  lastName: string;
  email: string;
  password: string;
  picture?: string;
}

export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: Array<string>;
  };
}
