import clsx from "clsx";

function Keyboard(props: {
  guessedLetters: string[];
  incorrectLetters: string[];
}) {
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(i + 97)
  );

  return (
    <div className="grid grid-cols-9 gap-[0.5rem]">
      {alphabet.map((letter) => (
        <div
          key={letter}
          className={clsx(
            props.guessedLetters.includes(letter)
              ? "opacity-75 cursor-default"
              : "opacity-100 cursor-pointer",
            "flex justify-center items-center bg-[#FFF] py-[0.6rem] px-[0.7rem] sm:w-[2.5rem] w-[2rem] h-[3.8rem] rounded-xl"
          )}
        >
          <h2 className="text-[2.5rem] leading-[3rem] text-[#000] uppercase">
            {letter}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
