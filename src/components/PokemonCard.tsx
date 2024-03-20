import { typesPokemon } from "../constans/type/type";

export interface Poke {
  name: string;
  id: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: "string";
    };
  }[];
}

interface Props {
  pokemon: Poke;
}

const PokemonCard = (props: Props) => {
  const { pokemon } = props;
  return (
    <div
      className="w-full aspect-card bg-contain bg-center bg-no-repeat relative hover:scale-105 transition-transform duration-300"
      style={{ backgroundImage: "url('../assets/bg-card.png')" }}
    >
      <div className="absolute flex flex-col justify-between top-0 left-0 bottom-0 right-0 ">
        <a href="" className="h-[60%] relative">
          <img
            className="w-[50%] h-[60%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
        </a>
        <div className="px-10 pb-7 flex flex-1 flex-col justify-between">
          <div>
            <p className="text-xl text-blue ">00{pokemon.id}</p>
            <h3 className="lg:text-3xl font-semibold capitalize">
              {pokemon.name}
            </h3>
          </div>
          <div className="flex justify-between h-5 items-center">
            {pokemon.types.map((type, index) => (
              <div
                key={index}
                className={`px-5 text-lg ${
                  typesPokemon[type.type.name]
                } rounded-3xl shadow-main drop-shadow-sm`}
              >
                {type.type.name}
              </div>
            ))}

            {/* <div className="px-5 text-lg bg-red rounded-3xl shadow-main drop-shadow-sm">
              Dragon
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
