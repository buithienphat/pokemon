import axios from "axios";
import { useEffect, useState } from "react";
import { Poke } from "../../components/PokemonCard";
import { productService } from "../../services/productService";

interface PokemonList {
  pokemonProps: Poke[] | any;
  onShowMore: () => void;
}

const useHomePage: () => PokemonList = () => {
  const [pokemonList, setPokemonList] = useState<any>([]);
  const [morePokemon, setMorePokemon] = useState<any>([]);
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(productService);
        setUrl(res?.data?.next);

        res?.data?.results.forEach(async (result: any) => {
          const data = await axios.get(result.url);
          setPokemonList((p: string) => [...p, data?.data]);
        });
      } catch (error) {
        console.log("first", error);
      }
    })();
  }, []);

  const onShowMore = async () => {
    try {
      const res = await axios.get(url);
      console.log("res", res);
      setUrl(res?.data?.next);
      res?.data?.results.forEach(async (result: any) => {
        const data = await axios.get(result.url);
        setMorePokemon((p: string) => [...p, data?.data]);
      });
    } catch (error) {}
  };

  const pokemonProps = {
    pokemonList,
    morePokemon,
  };

  return { pokemonProps, onShowMore };

  // const pokemons = useQuery()
};

export default useHomePage;
