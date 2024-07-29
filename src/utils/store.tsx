import { create } from "zustand";
import Data from "../components/data.json";

type CategoryKey = keyof typeof Data.categories;

type stateStore = {
  word: string;
  setWord: (status: string) => void;
  guessedLetters: string[];
  setGuessedLetters: (status: string[]) => void;
  addGuessedLetter: (status: string) => void;
  incorrectLetters: string[];
  pause: boolean;
  setPause: (status: boolean) => void;
  youWin: boolean;
  setYouWin: (status: boolean) => void;
  youLose: boolean;
  setYouLose: (status: boolean) => void;
  usedWords: string[];
  setUsedWords: (status: string[]) => void;
  currentCategory: string;
  setCurrentCategory: (status: string) => void;
  resetGame: () => void;
};

export const useStateStore = create<stateStore>((set, get) => ({
  word: "",
  setWord: (word) => set({ word }),
  guessedLetters: [],
  setGuessedLetters: (guessedLetters) => set({ guessedLetters }),
  addGuessedLetter: (letter) =>
    set((state) => {
      if (!state.guessedLetters.includes(letter)) {
        const newGuessedLetters = [...state.guessedLetters, letter];
        const incorrectLetters = newGuessedLetters.filter(
          (ltr) => !state.word.includes(ltr)
        );
        return { guessedLetters: newGuessedLetters, incorrectLetters };
      }
      return state;
    }),
  incorrectLetters: [],
  pause: false,
  setPause: (pause) => set({ pause }),
  youWin: false,
  setYouWin: (youWin) => set({ youWin }),
  youLose: false,
  setYouLose: (youLose) => set({ youLose }),
  usedWords: [],
  setUsedWords: (usedWords) => set({ usedWords }),
  currentCategory: "movie",
  setCurrentCategory: (category) => set({ currentCategory: category }),
  resetGame: () => {
    // Retrieve state setter functions from Zustand store
    const {
      setWord,
      setGuessedLetters,
      setUsedWords,
      setYouLose,
      setYouWin,
      setPause,
    } = get();
    const { currentCategory } = get();

    // Reset game states
    setGuessedLetters([]); // Reset guessed letters
    setUsedWords([]); // Reset used words
    console.log('Before reset:', get().youLose, get().youWin, get().pause);
    setYouLose(false); // Reset lose state
    setYouWin(false); // Reset win state
    setPause(false); // Reset pause state
    console.log('After reset:', get().youLose, get().youWin, get().pause);
    
    // Set a new word from the current category
    const getRandomName = () => {
      const categoryData = Data.categories[currentCategory as CategoryKey];
      if (!categoryData) return "";
      const available = categoryData.filter(
        (m: { name: string }) => !get().usedWords.includes(m.name)
      );
      if (available.length === 0) {
        setUsedWords([]); // Reset used words if no available names
        return getRandomName(); // Recursive call to get a new word
      }
      const randomIndex = Math.floor(Math.random() * available.length);
      return available[randomIndex].name;
    };

    setWord(getRandomName()); // Set a new word
  },
}));
