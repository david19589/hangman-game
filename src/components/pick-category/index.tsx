import { useStateStore } from "../../utils/store";
import GoBack from "/src/assets/icon-back.svg";
import { Link } from "react-router-dom";

function PickCategory() {
  const { setCurrentCategory } = useStateStore();
  return (
    <div className="md:px-[2.5rem] md:pt-[3rem] flex flex-col items-center min-h-[100vh] px-[1.5rem] pt-[2rem] pb-[3.5rem] bg-gradient-to-b from-[#1A043A] via-[#151278] to-[#2B1677]">
      <div className="lg:mb-[10rem] md:justify-start items-center md:mb-[7rem] flex justify-between max-w-[90rem] w-full mb-[5rem]">
        <Link to="/" className="rounded-full md:mr-[6rem]">
          <button className="flex items-center justify-center rounded-full w-[3rem] sm:w-[3.5rem] h-[3rem] sm:h-[3.5rem] hover:translate-y-[-0.2rem] transition-all duration-200 bg-gradient-to-b from-[#FE71FE] to-[#7199FF] shadow-custom-shadow-2">
            <img className="p-[0.8rem] w-[3rem]" src={GoBack} alt="GoBack" />
          </button>
        </Link>
        <h1 className="md:text-[5rem] md:leading-[6rem] text-[2rem] sm:text-[3rem] leading-[3.6rem] inline-block bg-gradient-to-b from-[#67B6FF] to-[#FFF] text-transparent bg-clip-text">
          Pick a Category
        </h1>
      </div>
      <div className="lg:max-w-[65rem] lg:grid-cols-3 md:grid-cols-2 grid grid-cols-1 justify-items-center w-full gap-[1.6rem]">
        <Link
          to="/movies"
          className="flex justify-center max-w-[20rem] w-full rounded-3xl"
        >
          <button
            onClick={() => {
              setCurrentCategory("movies");
            }}
            className="md:py-[3rem] max-w-[20rem] w-full p-[1.5rem] bg-[#2463FF] rounded-3xl shadow-custom-shadow hover:bg-[#3C74FF] transition-all duration-200"
          >
            <h2 className="md:text-[3rem] text-[1.5rem] leading-[1.8rem] text-[#FFF]">
              MOVIES
            </h2>
          </button>
        </Link>
        <Link
          to="/tv-shows"
          className="flex justify-center max-w-[20rem] w-full rounded-3xl"
        >
          <button
            onClick={() => {
              setCurrentCategory("tv-shows");
            }}
            className="md:py-[3rem] max-w-[20rem] w-full p-[1.5rem] bg-[#2463FF] rounded-3xl shadow-custom-shadow hover:bg-[#3C74FF] transition-all duration-200"
          >
            <h2 className="md:text-[3rem] text-[1.5rem] leading-[1.8rem] text-[#FFF]">
              TV SHOWS
            </h2>
          </button>
        </Link>
        <Link
          to="/countries"
          className="flex justify-center max-w-[20rem] w-full rounded-3xl"
        >
          <button
            onClick={() => {
              setCurrentCategory("countries");
            }}
            className="md:py-[3rem] max-w-[20rem] w-full p-[1.5rem] bg-[#2463FF] rounded-3xl shadow-custom-shadow hover:bg-[#3C74FF] transition-all duration-200"
          >
            <h2 className="md:text-[3rem] text-[1.5rem] leading-[1.8rem] text-[#FFF]">
              COUNTRIES
            </h2>
          </button>
        </Link>
        <Link
          to="/capital-cities"
          className="flex justify-center max-w-[20rem] w-full rounded-3xl"
        >
          <button
            onClick={() => {
              setCurrentCategory("capital-cities");
            }}
            className="md:py-[3rem] max-w-[20rem] w-full p-[1.5rem] bg-[#2463FF] rounded-3xl shadow-custom-shadow hover:bg-[#3C74FF] transition-all duration-200"
          >
            <h2 className="md:text-[3rem] text-[1.5rem] leading-[1.8rem] text-[#FFF]">
              CAPITAL CITIES
            </h2>
          </button>
        </Link>
        <Link
          to="/animals"
          className="flex justify-center max-w-[20rem] w-full rounded-3xl"
        >
          <button
            onClick={() => {
              setCurrentCategory("animals");
            }}
            className="md:py-[3rem] max-w-[20rem] w-full p-[1.5rem] bg-[#2463FF] rounded-3xl shadow-custom-shadow hover:bg-[#3C74FF] transition-all duration-200"
          >
            <h2 className="md:text-[3rem] text-[1.5rem] leading-[1.8rem] text-[#FFF]">
              ANIMALS
            </h2>
          </button>
        </Link>
        <Link
          to="/sports"
          className="flex justify-center max-w-[20rem] w-full rounded-3xl"
        >
          <button
            onClick={() => {
              setCurrentCategory("sports");
            }}
            className="md:py-[3rem] max-w-[20rem] w-full p-[1.5rem] bg-[#2463FF] rounded-3xl shadow-custom-shadow hover:bg-[#3C74FF] transition-all duration-200"
          >
            <h2 className="md:text-[3rem] text-[1.5rem] leading-[1.8rem] text-[#FFF]">
              SPORTS
            </h2>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PickCategory;
