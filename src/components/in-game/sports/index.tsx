import Menu from "/src/assets/icon-menu.svg";
import Data from "../../data.json";
import WordToGuess from "../components/word- to-guess";
import Keyboard from "../components/keyboard";
import { useCallback, useEffect } from "react";
import Paused from "../components/paused";
import YouWin from "../components/you-win";
import YouLose from "../components/you-lose";
import { useStateStore } from "../../../utils/store";
import Hp from "../components/hp";

function Sports() {
  const {
    usedWords,
    setUsedWords,
    word,
    setWord,
    guessedLetters,
    incorrectLetters,
    pause,
    setPause,
    youWin,
    setYouWin,
    youLose,
    setYouLose,
  } = useStateStore();

  const getRandomSportsName = useCallback(() => {
    const movie = Data.categories.Sports;
    const available = movie.filter((m) => !usedWords.includes(m.name));
    if (available.length === 0) {
      setUsedWords([]);
      return getRandomSportsName();
    }
    const randomIndex = Math.floor(Math.random() * available.length);
    const newWord = available[randomIndex].name;
    return newWord;
  }, [setUsedWords, usedWords]);

  useEffect(() => {
    setWord(getRandomSportsName());
  }, [getRandomSportsName, setWord]);

  useEffect(() => {
    const cleanedWord = word
      .toLowerCase()
      .split("")
      .filter((letter) => letter !== " ");
    setYouWin(
      cleanedWord.every((letter) =>
        guessedLetters.includes(letter.toLowerCase())
      )
    );
  }, [guessedLetters, setYouWin, word]);

  useEffect(() => {
    if (incorrectLetters.length >= 6) {
      setYouLose(true);
    } else {
      setYouLose(false);
    }
  }, [incorrectLetters.length, setYouLose]);
  console.log(word);
  return (
    <div className="flex flex-col items-center min-h-[100vh] px-[1.5rem] pt-[2rem] pb-[3.5rem] bg-gradient-to-b from-[#1A043A] via-[#151278] to-[#2B1677]">
      <div className="flex justify-between items-center w-full mb-[5rem]">
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
            Sports
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

export default Sports;
