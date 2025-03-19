"use client";
import { ChangeEvent, FC, FormEvent, useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { HISTORY_SEARCH } from "@/constants/historySearch";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { fetchDefinitions } from "@/redux/dictionary/actions";
import { dictionarySelector } from "@/redux/dictionary/slice";
import { IUIProps,SearchHistory,IHistory } from ".";

export const SearchBar: FC<IUIProps> = ({ darkMode }) => {
  const dispatch = useAppDispatch();
  const { noData } = useAppSelector(dictionarySelector);

  const [error, setError] = useState(false);
  const [word, setWord] = useState("");
  const [history, setHistory] = useState<IHistory[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    setHistory(JSON.parse(localStorage[HISTORY_SEARCH] ?? "[]"));
  }, []);

  const runSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!word.trim()) return setError(true);
    consultDefinitions(word);
  };

  const consultDefinitions = (word: string) => {
    dispatch(fetchDefinitions(word));
    saveToHistory();
    setError(false);
    setShowHistory(false);
  };

  const saveToHistory = () => {
    const timestamp = new Date().toLocaleString();
    const newHistory = [{ term: word, timestamp }, ...history];
    setHistory(newHistory);
    localStorage.setItem(HISTORY_SEARCH, JSON.stringify(newHistory));
  };

  const handleWordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
    setError(false);
    setShowHistory(true);
  };

  const getInputClassName = () => {
    return `w-full rounded-lg py-3 pl-6 pr-12 focus:outline-none border-2 ${
      darkMode
        ? "bg-gray-800 text-white placeholder-gray-400"
        : "bg-gray-100 text-black"
    } ${error ? "border-purple-500" : "border-transparent"}`;
  };

  return (
    <form className="relative" onSubmit={runSearch}>
      <div className="relative">
        <input
          value={word}
          onChange={handleWordChange}
          className={getInputClassName()}
          placeholder="Escribe una palabra"
        />
        <button
          type="button"
          onClick={runSearch}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
        >
          <FaSearch className={darkMode ? "text-gray-300" : "text-gray-500"} />
        </button>
      </div>
      {error && (
        <p className="absolute left-0 mt-1 text-xs text-purple-500">
          La palabra es obligatoria
        </p>
      )}
      {showHistory && (
        <SearchHistory
          history={history}
          onSelect={(term) => {
            setWord(term);
            consultDefinitions(term);
          }}
          onClose={() => setShowHistory(false)}
          darkMode={darkMode}
        />
      )}
      {word && noData && (
        <div className="flex flex-col items-center justify-center py-6 text-center">
          <HiOutlineEmojiSad className="text-5xl text-purple-500 animate-bounce" />
          <p className="mt-3 text-lg font-medium text-gray-700 dark:text-gray-300">
            No se encontraron resultados
          </p>
          <span className="text-sm text-gray-500">
            Prueba con otra palabra.
          </span>
        </div>
      )}
    </form>
  );
};
