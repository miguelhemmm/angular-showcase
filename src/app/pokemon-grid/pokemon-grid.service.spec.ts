import { TestBed } from '@angular/core/testing';

import { PokemonGridService } from './pokemon-grid.service';

describe('PokemonGridService', () => {
  let service: PokemonGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
