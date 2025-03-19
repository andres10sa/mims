"use client";
import { FC } from "react";
import { Switch } from "@headlessui/react";
import { useAppDispatch } from "@/redux/store/hooks";
import { toggleDarkMode } from "@/redux/ui/slice";
import { IUIProps } from ".";

export const ThemeSwitcher: FC<IUIProps> = ({ darkMode }) => {
  const dispatch = useAppDispatch();

  const onToggle = () => dispatch(toggleDarkMode());

  return (
    <Switch
      checked={darkMode}
      onChange={onToggle}
      className={`relative inline-flex h-4.5 w-8.5  items-center rounded-full transition-colors cursor-pointer ${
        darkMode ? "bg-purple-600" : "bg-gray-300"
      }`}
    >
      <span
        className={`inline-block h-3 w-3 transform bg-white rounded-full transition-transform ${
          darkMode ? "translate-x-4.5" : "translate-x-1"
        }`}
      />
    </Switch>
  );
};
