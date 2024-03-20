import { useEffect } from "react";
import ListColection from "./ListColection";
import useHomePage from "./useHomePage";
import axiosIntance from "../../utils/axiosIntance";
import Cookies from "js-cookie";
type Props = {};

const HomePage = (props: Props) => {
  const { pokemonProps, onShowMore } = useHomePage();

  const payload = {
    email: "phattest2@gmail.com",
    password: "123456",
  };

  Cookies.set(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjNlZjdjYWQ3YWMzMjk0ZjJiODZhMyIsImlhdCI6MTcxMDgyNTc1NywiZXhwIjoxNzEwODI2MDU3LCJpc3MiOiJDdXN0b21lckNGRCJ9.g3hwxR_x96yARze8qtWnHf3nfQG4vsDbMvH2QLzXYDE"
  );

  Cookies.set(
    "refreshToken",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MjM5OTA0YWQ3YWMzMjVjMzJiN2E5NiIsImlhdCI6MTcxMDgyODc1MCwiZXhwIjoxNzEzNDIwNzUwLCJpc3MiOiJDdXN0b21lckNGRCJ9.JBJsaeobXtl3-SmHpFCHTnV8xy6yVjj1Q87b9rkCwUw"
  );

  useEffect(() => {
    (async () => {
      try {
        const resp = await axiosIntance.get(`customer/profiles`);
        console.log("resp", resp);
      } catch (error) {
        return false;
      }
      // Cookies.set("token", resp.data.token);
    })();
  }, [Cookies.get("token")]);

  return (
    <section className="lg:px-16 py-16 sm:px-8 px-4 bg-bg-cl">
      <h2 className="text-3xl font-semibold mb-10">Explore Pokemon</h2>
      <ListColection pokemonProps={pokemonProps} />
      <div className="mt-10">
        <button
          onClick={onShowMore}
          className="px-5 h-10 w-fit mx-auto bg-red rounded-2xl flex items-center"
        >
          Show More
        </button>
      </div>
    </section>
  );
};

export default HomePage;
