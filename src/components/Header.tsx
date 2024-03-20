type Props = {};

const Header = (props: Props) => {
  return (
    <header className="px-16 py-16 flex gap-10 items-center justify-between text-6xl font-bold relative bg-bg-cl/70">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-contain bg-center opacity-60 -z-10"
        style={{
          backgroundImage: "url('../assets/pokemon.png')",
        }}
      ></div>
      <div className="w-1/2">
        <a className="flex mb-10 h-[100px]" href="Logo">
          <img src="../assets/logo.svg" alt="Logo" />
        </a>
        <h1>
          Explore The <span className="text-red block">Diverse Realms</span> of
          Pokemon Magic
        </h1>
      </div>
      <div>
        <img className="h-[50vh]" src="../assets/charizard.png" alt="Pokemon" />
      </div>
    </header>
  );
};

export default Header;
