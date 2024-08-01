import Data from "../../data.json";
import { useCallback, useEffect } from "react";
import { useStateStore } from "../../../utils/store";
import CheckWin from "../../../utils/useCheckWin";
import GameContent from "../components/game-content";

function TvShows() {
  const { usedWords, setUsedWords, setWord, incorrectLetters, setYouLose } =
    useStateStore();

  const getRandomTvShowName = useCallback(() => {
    const tvShows = Data.categories["TV Shows"];
    const available = tvShows.filter((m) => !usedWords.includes(m.name));
    if (available.length === 0) {
      setUsedWords([]);
      return getRandomTvShowName();
    }
    const randomIndex = Math.floor(Math.random() * available.length);
    const newWord = available[randomIndex].name;
    return newWord;
  }, [setUsedWords, usedWords]);

  useEffect(() => {
    setWord(getRandomTvShowName());
  }, [getRandomTvShowName, setWord]);

  CheckWin();

  useEffect(() => {
    if (incorrectLetters.length >= 6) {
      setYouLose(true);
    } else {
      setYouLose(false);
    }
  }, [incorrectLetters.length, setYouLose]);

  return <GameContent title="Tv Shows" />;
}

export default TvShows;
