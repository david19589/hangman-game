import { Link } from "react-router-dom";
import { useStateStore } from "../../../../utils/store";
import { useState } from "react";
import clsx from "clsx";

function YouLose() {
  const { resetGame, word } = useStateStore();
  const [reveal, setReveal] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center absolute top-0 bottom-0 left-0 right-0 px-[1.5rem] bg-gradient-to-b from-[#1a043abd] via-[#151278b0] to-[#2b16779d]">
      <div className="flex flex-col items-center max-w-[37rem] w-full px-[2rem] pb-[5.5rem] shadow-custom-shadow bg-gradient-to-b from-[#344aba] to-[#001479e5] rounded-[4rem]">
        <h1 className="text-[5rem] sm:text-[6rem] leading-[7rem] tracking-[-0.25rem] inline-block bg-gradient-to-b from-[#67B6FF] to-[#FFF] text-transparent bg-clip-text translate-y-[-3.5rem] text-stroke-black">
          You Lose
        </h1>
        <button
          onClick={resetGame}
          className="text-[2rem] leading-[2.4rem] text-[#FFF] bg-[#2463FF] shadow-custom-shadow rounded-full max-w-[15rem] w-full mb-[2rem] py-[0.8rem] px-[1rem] hover:bg-[#2462ffb4] transition-all duration-300"
        >
          CONTINUE
        </button>
        <Link
          onClick={resetGame}
          to="/pick-category"
          className="rounded-full max-w-[17.5rem] w-full flex justify-center"
        >
          <button className="text-[2rem] leading-[2.4rem] text-[#FFF] bg-[#2463FF] shadow-custom-shadow rounded-full max-w-[17.5rem] w-full mb-[2rem] py-[0.8rem] px-[1rem] hover:bg-[#2462ffb4] transition-all duration-300">
            NEW CATEGORY
          </button>
        </Link>
        <Link
          to="/"
          className="rounded-full max-w-[15rem] w-full flex justify-center"
        >
          <button
            onClick={resetGame}
            className="text-[2rem] leading-[2.4rem] text-[#FFF] bg-gradient-to-b from-[#FE71FE] to-[#7199ffce] hover:bg-gradient-to-b hover:from-[#fe71fe] hover:to-[#396ceb] shadow-custom-shadow-3 rounded-full max-w-[15rem] w-full py-[0.8rem] px-[1rem] transition-all duration-300"
          >
            QUIT GAME
          </button>
        </Link>
        <button
          onClick={() => {
            setReveal(true);
          }}
          className={clsx(
            reveal ? "hidden" : "flex",
            "text-[2rem] leading-[2.4rem] text-[#FFF] hover:text-[#ffffffaf] md:translate-x-[-12rem] translate-y-[2rem]  md:translate-y-[2rem] transition-all duration-300"
          )}
        >
          Reveal
        </button>
        <h2
          className={clsx(
            reveal ? "flex" : "hidden",
            "text-[1.5rem] leading-[2.4rem] text-[#FFF] md:translate-x-[-12rem] md:translate-y-[2rem] translate-y-[2rem]" 
          )}
        >
          {word}
        </h2>
      </div>
    </div>
  );
}
export default YouLose;
