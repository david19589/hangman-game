import Logo from "/src/assets/logo.svg";
import Play from "/src/assets/icon-play.svg";
import PlayBackground from "/src/assets/icon-play-background.svg";
import { Link } from "react-router-dom";

function MainMenu() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] px-[1.5rem] lg:bg-[url('/src/assets/background-desktop.svg')] md:bg-[url('/src/assets/background-tablet.svg')] bg-[url('/src/assets/background-mobile.svg')] bg-no-repeat bg-cover bg-center">
      <div className="flex flex-col items-center px-[2rem] pb-[4rem] shadow-custom-shadow bg-gradient-to-b from-[#344ABA] to-[#001479D4] rounded-[4rem]">
        <img
          className="sm:translate-y-[-5.5rem] translate-y-[-3rem]"
          src={Logo}
          alt="Logo"
        />
        <Link to="/pick-category">
          <div className="relative cursor-pointer rounded-full mb-[3.5rem] hover:translate-y-[-0.2rem] transition-all duration-200">
            <img
              className="rounded-full"
              src={PlayBackground}
              alt="PlayBackground"
            />
            <img className="absolute top-11 right-12" src={Play} alt="Play" />
          </div>
        </Link>
        <Link to="/how-to-play" className="flex justify-center w-full">
          <button className="text-[2rem] leading-[2.4rem] text-[#FFF] bg-[#2463FF] shadow-custom-shadow rounded-full max-w-[16rem] w-full py-[0.8rem] px-[1rem] hover:bg-[#2462ffb4] transition-all duration-300">
            HOW TO PLAY
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MainMenu;
