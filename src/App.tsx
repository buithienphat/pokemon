import { useEffect, useState } from "react";
import PokemonList from "./components/PokemonList";
import { Pokemon, Pokemons } from "./interface";

const App = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);
  const [pokemonDetail, setPokemonDetail] = useState<Pokemon[]>([]);
  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=12"
      );
      const dataList = await res.json();
      setUrl(dataList.next);
      dataList.results.map(async (data: Pokemons) => {
        const newRes = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${data.name}`
        );
        const newData = await newRes.json();
        setPokemons((p): Pokemon[] => [...p, newData]);
      });
    };
    fetchPokemon();
  }, []);

  const handdleLoad = async () => {
    setLoading(true);
    const res = await fetch(url);
    const dataList = await res.json();
    setUrl(dataList.next);
    dataList.results.map(async (data: Pokemons) => {
      const newRes = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${data.name}`
      );
      const newData = await newRes.json();
      setPokemons((p): Pokemon[] => [...p, newData]);
    });
    setLoading(false);
  };

  //Show detail

  const showDetail = (id: number) => {
    console.log("number", id);
    const pokemonDetailData = pokemons.filter((pokemon) => pokemon.id === id);
    setPokemonDetail(pokemonDetailData);
    setShowModal(true);
  };
  return (
    <>
      {showModal ? (
        <div className="overlay">
          <div className="pokemon-item">
            <div className="close" onClick={() => setShowModal(false)}></div>
            <h2 className="pokemon-name">{pokemonDetail[0].name}</h2>
            <div className="pokemon-img">
              <img
                src={pokemonDetail[0].sprites.other.dream_world.front_default}
                alt={pokemonDetail[0].name}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <h1 className="header">Pokemon</h1>
          <PokemonList pokemons={pokemons} showDetail={showDetail} />
          <div
            onClick={handdleLoad}
            className={`btn-loadmore ${loading ? "disable" : ""}`}
          >
            {loading ? "Loading..." : "Load more"}
          </div>
        </div>
      )}
    </>
  );
};

export default App;
