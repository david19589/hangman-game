import Menu from "/src/assets/icon-menu.svg";
import WordToGuess from "../word- to-guess";
import Keyboard from "../keyboard";
import Paused from "../paused";
import YouWin from "../you-win";
import YouLose from "../you-lose";
import { useStateStore } from "../../../../utils/store";
import Hp from "../hp";

function GameContent({ title }: { title: string }) {
  const { pause, setPause, youWin, youLose } = useStateStore();

  return (
    <div className="md:px-[2.5rem] md:pt-[3rem] flex flex-col items-center min-h-[100vh] px-[1.5rem] pt-[2rem] pb-[3.5rem] bg-gradient-to-b from-[#1A043A] via-[#151278] to-[#2B1677]">
      <div className="flex justify-between items-center max-w-[90rem] w-full mb-[5rem]">
        <div className="flex justify-start items-center gap-[1rem] mb-[5rem]">
          <button className="flex items-center justify-center rounded-full sm:w-[3.5rem] w-[2.5rem] sm:h-[3.5rem] h-[2.5rem] hover:translate-y-[-0.2rem] transition-all duration-200 bg-gradient-to-b from-[#FE71FE] to-[#7199FF] shadow-custom-shadow-2">
            <img
              onClick={() => {
                setPause(true);
              }}
              className="p-[0.8rem] w-[3rem]"
              src={Menu}
              alt="Menu"
            />
          </button>
          <h1 className="sm:text-[3rem] text-[1.5rem] leading-[3.6rem] text-[#FFF]">
            {title}
          </h1>
        </div>
        <Hp />
      </div>
      <div className="flex flex-col items-center">
        <WordToGuess />
        <Keyboard />
      </div>
      {pause && <Paused />}
      {youWin && <YouWin />}
      {youLose && <YouLose />}
    </div>
  );
}

export default GameContent;
