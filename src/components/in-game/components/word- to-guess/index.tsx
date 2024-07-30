import clsx from "clsx";
import { useStateStore } from "../../../../utils/store";

function WordToGuess() {
  const { word, guessedLetters } = useStateStore();
  const wordParts = word.split(" ");

  return (
    <div className="lg:max-w-[60rem] flex flex-wrap justify-center items-center max-w-[45rem] w-full gap-[0.5rem] mb-[7.5rem]">
      {wordParts.map((part, partIndex) => (
        <div
          key={partIndex}
          className="flex justify-center flex-wrap mr-[1rem] gap-[0.5rem]"
        >
          {part.split("").map((letter, index) => (
            <span
              key={index}
              className={clsx(
                guessedLetters.includes(letter.toLowerCase())
                  ? "bg-[#2463FF] shadow-custom-shadow"
                  : "bg-[#2462ff4d]",
                "lg:w-[3.9rem] lg:h-[5rem] md:w-[3rem] md:h-[4.4rem] flex justify-center py-[0.6rem] px-[0.7rem] rounded-xl sm:w-[2.5rem] w-[2rem] h-[3.8rem]"
              )}
            >
              <span
                className={clsx(
                  guessedLetters.includes(letter.toLowerCase())
                    ? "flex"
                    : "hidden",
                  "lg:text-[4rem] md:text-[3.5rem] text-[2.5rem] leading-[3rem] text-[#FFF] uppercase"
                )}
              >
                {letter}
              </span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default WordToGuess;
