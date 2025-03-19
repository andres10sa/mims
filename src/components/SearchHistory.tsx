"use client";
import { FC, useRef, useEffect } from "react";
import { ISearchHistoryProps } from ".";

export const SearchHistory: FC<ISearchHistoryProps> = ({
  history,
  onSelect,
  onClose,
  darkMode,
}) => {
  const historyRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        historyRef.current &&
        !historyRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (history.length === 0) return null;

  return (
    <ul
      ref={historyRef}
      className={`absolute w-full mt-2 border rounded-lg shadow-lg z-10 transition-all ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
      style={{
        maxHeight: "200px",
        overflowY: history.length > 4 ? "auto" : "hidden",
        height: `min(${history.length * 40}px, 200px)`,
      }}
    >
      {history.map(({ term, timestamp }, index) => (
        <li
          key={index}
          onClick={() => onSelect(term)}
          className="flex justify-between px-4 py-2 cursor-pointer hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600"
        >
          <span className="font-semibold">{term}</span>
          <span className="text-sm text-gray-500">{timestamp}</span>
        </li>
      ))}
    </ul>
  );
};

