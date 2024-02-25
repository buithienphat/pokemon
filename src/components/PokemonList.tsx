import { Pokemon } from "../interface";

type Props = {
  pokemons: Pokemon[];
  showDetail: (id: number) => void;
};

const PokemonList = (props: Props) => {
  const { pokemons, showDetail } = props;

  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon) => (
        <div
          key={pokemon.id}
          className="pokemon-item"
          onClick={() => showDetail(pokemon.id)}
        >
          <h2 className="pokemon-name">{pokemon.name}</h2>
          <div className="pokemon-img">
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
