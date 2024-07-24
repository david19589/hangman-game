import GoBack from "/src/assets/icon-back.svg";
import { Link } from "react-router-dom";

function HowToPlay() {
  return (
    <div className="flex flex-col items-center min-h-[100vh] px-[1.5rem] pt-[2rem] pb-[3.5rem] bg-gradient-to-b from-[#1A043A] via-[#151278] to-[#2B1677]">
      <div className="flex justify-between w-full mb-[5rem]">
        <Link to="/" className="rounded-full">
          <button className="flex items-center justify-center rounded-full w-[3.5rem] h-[3.5rem] hover:translate-y-[-0.2rem] transition-all duration-200 bg-gradient-to-b from-[#FE71FE] to-[#7199FF] shadow-custom-shadow-2">
            <img className="p-[0.8rem] w-[3rem]" src={GoBack} alt="GoBack" />
          </button>
        </Link>
        <h1 className="text-[3rem] leading-[3.6rem] inline-block bg-gradient-to-b from-[#67B6FF] to-[#FFF] text-transparent bg-clip-text">
          How to Play
        </h1>
      </div>
      <div>
        <div className="p-[2rem] bg-[#FFF] rounded-3xl max-w-[39rem] w-full mb-[1.5rem]">
          <div className="flex gap-[1rem] mb-[1rem]">
            <span className="text-[1.5rem] leading-[1.8rem] text-[#2463FF]">
              01
            </span>
            <h2 className="text-[1.5rem] leading-[1.8rem] text-[#261676]">
              Choose a category
            </h2>
          </div>
          <p className="text-[1rem] leading-[1.2rem] text-[#887DC0] max-w-[16.5rem] w-full">
            First, choose a word category, like animals or movies. The computer
            then randomly selects a secret word from that topic and shows you
            blanks for each letter of the word.
          </p>
        </div>
        <div className="p-[2rem] bg-[#FFF] rounded-3xl max-w-[39rem] w-full mb-[1.5rem]">
          <div className="flex gap-[1rem] mb-[1rem]">
            <span className="text-[1.5rem] leading-[1.8rem] text-[#2463FF]">
              02
            </span>
            <h2 className="text-[1.5rem] leading-[1.8rem] text-[#261676]">
              Guess letters
            </h2>
          </div>
          <p className="text-[1rem] leading-[1.2rem] text-[#887DC0] max-w-[16.5rem] w-full">
            Take turns guessing letters. The computer fills in the relevant
            blank spaces if your guess is correct. If it’s wrong, you lose some
            health, which empties after eight incorrect guesses.
          </p>
        </div>
        <div className="p-[2rem] bg-[#FFF] rounded-3xl max-w-[39rem] w-full">
          <div className="flex gap-[1rem] mb-[1rem]">
            <span className="text-[1.5rem] leading-[1.8rem] text-[#2463FF]">
              03
            </span>
            <h2 className="text-[1.5rem] leading-[1.8rem] text-[#261676]">
              Win or lose
            </h2>
          </div>
          <p className="text-[1rem] leading-[1.2rem] text-[#887DC0] max-w-[16.5rem] w-full">
            You win by guessing all the letters in the word before your health
            runs out. If the health bar empties before you guess the word, you
            lose.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowToPlay;
