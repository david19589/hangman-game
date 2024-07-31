import { useStateStore } from "./store";
import { useEffect } from "react";

function useCheckWin() {
  const { word, guessedLetters, setYouWin } = useStateStore();

  useEffect(() => {
    const cleanWord = word
      .toLowerCase()
      .split("")
      .filter((letter) => letter !== " ");

    setYouWin(
      cleanWord.every((letter) => guessedLetters.includes(letter.toLowerCase()))
    );
  }, [guessedLetters, setYouWin, word]);
}
export default useCheckWin;
