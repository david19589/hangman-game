import Data from "../../data.json";
import { useCallback, useEffect } from "react";
import { useStateStore } from "../../../utils/store";
import CheckWin from "../../../utils/useCheckWin";
import GameContent from "../components/game-content";

function CapitalCities() {
  const { usedWords, setUsedWords, setWord, incorrectLetters, setYouLose } =
    useStateStore();

  const getRandomCapitalCitiesName = useCallback(() => {
    const capitalCities = Data.categories["Capital Cities"];
    const available = capitalCities.filter((m) => !usedWords.includes(m.name));
    if (available.length === 0) {
      setUsedWords([]);
      return getRandomCapitalCitiesName();
    }
    const randomIndex = Math.floor(Math.random() * available.length);
    const newWord = available[randomIndex].name;
    return newWord;
  }, [setUsedWords, usedWords]);

  useEffect(() => {
    setWord(getRandomCapitalCitiesName());
  }, [getRandomCapitalCitiesName, setWord]);

  CheckWin();

  useEffect(() => {
    if (incorrectLetters.length >= 6) {
      setYouLose(true);
    } else {
      setYouLose(false);
    }
  }, [incorrectLetters.length, setYouLose]);

  return <GameContent title="Capital Cities" />;
}

export default CapitalCities;
