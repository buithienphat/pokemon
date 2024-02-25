export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

export interface Pokemons {
  name: string;
  url: string;
}
