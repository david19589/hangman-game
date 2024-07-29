import clsx from "clsx";
import { useEffect } from "react";
import { useStateStore } from "../../../../utils/store";

function Keyboard() {
  const { guessedLetters, addGuessedLetter, incorrectLetters, word } =
    useStateStore();

  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(i + 97)
  );

  const filteredGuessedLetters = guessedLetters.filter((letter) =>
    word.includes(letter)
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [addGuessedLetter]);

  return (
    <div className="grid grid-cols-9 gap-[0.5rem]">
      {alphabet.map((letter) => (
        <div
          onClick={() => {
            addGuessedLetter(letter);
          }}
          key={letter}
          className={clsx(
            filteredGuessedLetters.includes(letter) ||
              incorrectLetters.includes(letter)
              ? "opacity-75 cursor-default"
              : "opacity-100 cursor-pointer hover:bg-[#2463FF] group",

            "flex justify-center items-center bg-[#FFF] py-[0.6rem] px-[0.7rem] sm:w-[2.5rem] w-[2rem] h-[3.8rem] rounded-xl"
          )}
        >
          <h2 className="text-[2.5rem] leading-[3rem] text-[#000] uppercase group-hover:text-[#FFF]">
            {letter}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
