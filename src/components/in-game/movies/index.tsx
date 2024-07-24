import Menu from "/src/assets/icon-menu.svg";
import Heart from "/src/assets/icon-heart.svg";
import { Link } from "react-router-dom";

function Movies() {
  return (
    <div className="flex flex-col items-center min-h-[100vh] px-[1.5rem] pt-[2rem] pb-[3.5rem] bg-gradient-to-b from-[#1A043A] via-[#151278] to-[#2B1677]">
      <div className="flex justify-between items-center w-full mb-[5rem]">
        <div className="flex justify-start items-center gap-[1rem] mb-[5rem]">
          <Link to="/pick-category" className="rounded-full">
            <button className="flex items-center justify-center rounded-full sm:w-[3.5rem] w-[2.5rem] sm:h-[3.5rem] h-[2.5rem] hover:translate-y-[-0.2rem] transition-all duration-200 bg-gradient-to-b from-[#FE71FE] to-[#7199FF] shadow-custom-shadow-2">
              <img className="p-[0.8rem] w-[3rem]" src={Menu} alt="Menu" />
            </button>
          </Link>
          <h1 className="sm:text-[3rem] text-[1.5rem] leading-[3.6rem] text-[#FFF]">
            Movies
          </h1>
        </div>
        <div className="flex justify-end items-center gap-[1rem] mb-[5rem]">
          <div className="flex items-center justify-start px-[0.3rem] w-[3.5rem] h-[1rem] bg-[#FFF] rounded-full">
            <span className="flex w-[1rem] h-[0.5rem] bg-[#000] rounded-full"></span>
          </div>
          <img className="w-[2rem]" src={Heart} alt="Heart" />
        </div>
      </div>
    </div>
  );
}

export default Movies;
