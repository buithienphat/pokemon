// import axios from "axios";

export const fetchPokemon = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=12"
  );
  const dataList = await res.json();

  return dataList.results.map(async (data: any) => {
    const newRes = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${data.name}`
    );
    const newData = await newRes.json();
    console.log("newData", newData);
    return newData;
  });
};

const check = fetchPokemon();
console.log("check", check);
