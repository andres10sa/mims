"use client";
import React from "react";
import { FaReact } from "react-icons/fa";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { useAppSelector } from "@/redux/store/hooks";
import { uiSelector } from "@/redux/ui/slice";
import { FontPicker, SearchBar, ThemeSwitcher } from ".";

export const Header = () => {
  const { darkMode } = useAppSelector(uiSelector);

  return (
    <header className="flex flex-col gap-4 mb-6">
      <div className="flex items-center justify-between">
        <FaReact
          color={darkMode ? "#FFFFFF" : "#61DBFB"}
          size={35}
          style={{ animation: "rotar 4s linear infinite" }}
        />
        <div className="flex items-center space-x-4">
          <FontPicker darkMode={darkMode} />
          <div className="h-5 border-l border-gray-300" />
          <ThemeSwitcher darkMode={darkMode} />
          {darkMode ? (
            <IoMoon size={20} color="#474B4E" />
          ) : (
            <IoMoonOutline size={20} color="#1F2937" />
          )}
        </div>
      </div>
      <SearchBar darkMode={darkMode} />
    </header>
  );
};
