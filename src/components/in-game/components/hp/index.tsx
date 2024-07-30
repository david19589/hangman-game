import clsx from "clsx";
import { useStateStore } from "../../../../utils/store";
import Heart from "/src/assets/icon-heart.svg";

function Hp() {
  const { incorrectLetters } = useStateStore();

  return (
    <div className="flex justify-end items-center gap-[1rem] mb-[5rem]">
      <div className="flex items-center justify-start px-[0.3rem] w-[3.5rem] h-[1rem] bg-[#FFF] rounded-full">
        <span
          className={clsx(
            incorrectLetters.length === 0 && "w-full",
            incorrectLetters.length === 1 && "w-[85%]",
            incorrectLetters.length === 2 && "w-[70%]",
            incorrectLetters.length === 3 && "w-[50%]",
            incorrectLetters.length === 4 && "w-[30%]",
            incorrectLetters.length === 5 && "w-[20%]",
            incorrectLetters.length === 6 && "w-[0%]",
            "flex h-[0.5rem] bg-[#000] rounded-full"
          )}
        ></span>
      </div>
      <img className="w-[2rem]" src={Heart} alt="Heart" />
    </div>
  );
}
export default Hp;
