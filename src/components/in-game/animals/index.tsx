import Data from "../../data.json";
import { useCallback, useEffect } from "react";
import { useStateStore } from "../../../utils/store";
import CheckWin from "../../../utils/useCheckWin";
import GameContent from "../components/game-content";

function Animals() {
  const { usedWords, setUsedWords, setWord, incorrectLetters, setYouLose } =
    useStateStore();

  const getRandomAnimalName = useCallback(() => {
    const animals = Data.categories.Animals;
    const available = animals.filter((m) => !usedWords.includes(m.name));
    if (available.length === 0) {
      setUsedWords([]);
      return getRandomAnimalName();
    }
    const randomIndex = Math.floor(Math.random() * available.length);
    const newWord = available[randomIndex].name;
    return newWord;
  }, [setUsedWords, usedWords]);

  useEffect(() => {
    setWord(getRandomAnimalName());
  }, [getRandomAnimalName, setWord]);

  CheckWin();

  useEffect(() => {
    if (incorrectLetters.length >= 6) {
      setYouLose(true);
    } else {
      setYouLose(false);
    }
  }, [incorrectLetters.length, setYouLose]);

  return <GameContent title="Animals" />;
}

export default Animals;
