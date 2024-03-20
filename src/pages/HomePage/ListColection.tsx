import PokemonCard, { Poke } from "../../components/PokemonCard";
import useHomePage from "./useHomePage";

interface Props {
  pokemonProps: any;
}

const ListColection = (props: Props) => {
  const { pokemonProps } = props;

  const { pokemonList, morePokemon } = pokemonProps;

  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-y-5">
      {pokemonList?.map((pokemon: Poke, index: number) => {
        return <PokemonCard key={index} pokemon={pokemon} />;
      })}
      {morePokemon &&
        morePokemon?.map((pokemon: Poke, index: number) => {
          return <PokemonCard key={index} pokemon={pokemon} />;
        })}
    </div>
  );
};

export default ListColection;
