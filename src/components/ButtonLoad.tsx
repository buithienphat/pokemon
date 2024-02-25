import axios from "axios";
import { useEffect, useState } from "react";
import { Pokemon, Pokemons } from "../interface";
import PokemonList from "./PokemonList";

let offSet: number = 32;

const ButtonLoad = () => {
  const [morePokemons, setMorePokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=12`
      );
      res.data.results.forEach(async (pokemon: Pokemons) => {
        const pokemonDetail = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setMorePokemons((p) => [...p, pokemonDetail.data]);
      });
    };
    fetchPokemon();
  }, [offSet]);

  const handleLoad = () => {
    offSet = offSet + 12;
    console.log("offSet", offSet);
  };

  return (
    <>
      <PokemonList pokemonss={morePokemons} />
      <div onClick={handleLoad} className="btn-loadmore">
        load more
      </div>
    </>
  );
};

export default ButtonLoad;
