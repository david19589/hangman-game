import GoBack from "/src/assets/icon-back.svg";
import { Link } from "react-router-dom";

function HowToPlay() {
  return (
    <div className="md:px-[2.5rem] md:pt-[3rem] flex flex-col items-center min-h-[100vh] px-[1.5rem] pt-[2rem] pb-[3.5rem] bg-gradient-to-b from-[#1A043A] via-[#151278] to-[#2B1677]">
      <div className="lg:mb-[10rem] md:justify-start items-center md:mb-[7rem] flex justify-between max-w-[90rem] w-full mb-[5rem]">
        <Link to="/" className="rounded-full md:mr-[6rem]">
          <button className="flex items-center justify-center rounded-full w-[3rem] sm:w-[3.5rem] h-[3rem] sm:h-[3.5rem] hover:translate-y-[-0.2rem] transition-all duration-200 bg-gradient-to-b from-[#FE71FE] to-[#7199FF] shadow-custom-shadow-2">
            <img className="p-[0.8rem] w-[3rem]" src={GoBack} alt="GoBack" />
          </button>
        </Link>
        <h1 className="md:text-[5rem] md:leading-[6rem] text-[2rem] sm:text-[3rem] leading-[3.6rem] inline-block bg-gradient-to-b from-[#67B6FF] to-[#FFF] text-transparent bg-clip-text">
          How to Play
        </h1>
      </div>
      <div className="lg:flex lg:gap-4">
        <div className="lg:px-[3rem] lg:py-[3rem] lg:mb-0 lg:flex-col md:items-center flex flex-row gap-[1rem] p-[2rem] bg-[#FFF] rounded-3xl max-w-[39rem] w-full mb-[1.5rem]">
          <span className="lg:mr-0 md:text-[5rem] md:leading-[4rem] md:mr-[2.5rem] text-[1.5rem] leading-[1.8rem] text-[#2463FF]">
            01
          </span>
          <div className="flex flex-col gap-[1rem] mb-[1rem]">
            <h2 className="lg:text-center md:text-[2rem] text-[1.5rem] leading-[1.8rem] text-[#261676]">
              Choose a category
            </h2>
            <p className="lg:max-w-[12rem] lg:text-center md:max-w-[31rem] md:text-[1.3rem] md:translate-x-0 translate-x-[-2rem] text-[1rem] leading-[1.2rem] text-[#887DC0] max-w-[16.5rem] w-full">
              First, choose a word category, like animals or movies. The
              computer then randomly selects a secret word from that topic and
              shows you blanks for each letter of the word.
            </p>
          </div>
        </div>
        <div className="lg:px-[3rem] lg:py-[3rem] lg:mb-0 lg:flex-col md:items-center flex flex-row gap-[1rem] p-[2rem] bg-[#FFF] rounded-3xl max-w-[39rem] w-full mb-[1.5rem]">
          <span className="lg:mr-0 md:text-[5rem] md:leading-[4rem] md:mr-[2.5rem] text-[1.5rem] leading-[1.8rem] text-[#2463FF]">
            02
          </span>
          <div className="flex flex-col gap-[1rem] mb-[1rem]">
            <h2 className="lg:text-center md:text-[2rem] text-[1.5rem] leading-[1.8rem] text-[#261676]">
              Guess letters
            </h2>
            <p className="lg:max-w-[12rem] lg:text-center md:max-w-[31rem] md:text-[1.3rem] md:translate-x-0 translate-x-[-2rem] text-[1rem] leading-[1.2rem] text-[#887DC0] max-w-[16.5rem] w-full">
              Take turns guessing letters. The computer fills in the relevant
              blank spaces if your guess is correct. If it’s wrong, you lose
              some health, which empties after eight incorrect guesses.
            </p>
          </div>
        </div>
        <div className="lg:px-[3rem] lg:py-[3rem] lg:flex-col md:items-center flex flex-row gap-[1rem] p-[2rem] bg-[#FFF] rounded-3xl max-w-[39rem] w-full">
          <span className="lg:mr-0 lg:text-center md:text-[5rem] md:leading-[4rem] md:mr-[2.5rem] text-[1.5rem] leading-[1.8rem] text-[#2463FF]">
            03
          </span>
          <div className="flex flex-col gap-[1rem] mb-[1rem]">
            <h2 className="lg:text-center md:text-[2rem] text-[1.5rem] leading-[1.8rem] text-[#261676]">
              Win or lose
            </h2>
            <p className="lg:max-w-[12rem] lg:text-center md:max-w-[31rem] md:text-[1.3rem] md:translate-x-0 translate-x-[-2rem] text-[1rem] leading-[1.2rem] text-[#887DC0] max-w-[16.5rem] w-full">
              You win by guessing all the letters in the word before your health
              runs out. If the health bar empties before you guess the word, you
              lose.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToPlay;
