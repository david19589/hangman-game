import Data from "../../data.json";
import { useCallback, useEffect } from "react";
import { useStateStore } from "../../../utils/store";
import CheckWin from "../../../utils/useCheckWin";
import GameContent from "../components/game-content";

function Movies() {
  const { usedWords, setUsedWords, setWord, incorrectLetters, setYouLose } =
    useStateStore();

  const getRandomMovieName = useCallback(() => {
    const movie = Data.categories.Movies;
    const available = movie.filter((m) => !usedWords.includes(m.name));
    if (available.length === 0) {
      setUsedWords([]);
      return getRandomMovieName();
    }
    const randomIndex = Math.floor(Math.random() * available.length);
    const newWord = available[randomIndex].name;
    return newWord;
  }, [setUsedWords, usedWords]);

  useEffect(() => {
    setWord(getRandomMovieName());
  }, [getRandomMovieName, setWord]);

  CheckWin();

  useEffect(() => {
    if (incorrectLetters.length >= 6) {
      setYouLose(true);
    } else {
      setYouLose(false);
    }
  }, [incorrectLetters.length, setYouLose]);

  return <GameContent title="Movies" />;
}

export default Movies;
