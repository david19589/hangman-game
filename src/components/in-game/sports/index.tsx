import Data from "../../data.json";
import { useCallback, useEffect } from "react";
import { useStateStore } from "../../../utils/store";
import CheckWin from "../../../utils/useCheckWin";
import GameContent from "../components/game-content";

function Sports() {
  const { usedWords, setUsedWords, setWord, incorrectLetters, setYouLose } =
    useStateStore();

  const getRandomSportsName = useCallback(() => {
    const sports = Data.categories.Sports;
    const available = sports.filter((m) => !usedWords.includes(m.name));
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

  CheckWin();

  useEffect(() => {
    if (incorrectLetters.length >= 6) {
      setYouLose(true);
    } else {
      setYouLose(false);
    }
  }, [incorrectLetters.length, setYouLose]);

  return <GameContent title="Sports" />;
}

export default Sports;
