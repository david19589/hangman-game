import clsx from "clsx";

function WordToGuess(props: {
  getRandomMovieName: () => string;
  word: string;
  guessedLetters: string[];
}) {
  const wordParts = props.word.split(" ");

  return (
    <div className="flex flex-wrap justify-center items-center max-w-[45rem] w-full gap-[0.5rem] mb-[7.5rem]">
      {wordParts.map((part, partIndex) => (
        <div
          key={partIndex}
          className="md:mr-[2.5rem] flex justify-center flex-wrap mr-[1rem] gap-[0.5rem]"
        >
          {part.split("").map((letter, index) => (
            <span
              key={index}
              className={clsx(
                props.guessedLetters.includes(letter)
                  ? "bg-[#2463FF] shadow-custom-shadow"
                  : "bg-[#2462ff4d]",
                "flex justify-center py-[0.6rem] px-[0.7rem] rounded-xl sm:w-[2.5rem] w-[2rem] h-[3.8rem]"
              )}
            >
              <span
                className={clsx(
                  props.guessedLetters.includes(letter) ? "flex" : "hidden",
                  "text-[2.5rem] leading-[3rem] text-[#FFF] uppercase"
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
