"use client";
import { FC } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/react";
import { FONTS } from "@/constants/fonts";
import { IFont } from "@/models/font";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { selectFont, uiSelector } from "@/redux/ui/slice";
import { IUIProps } from ".";

export const FontPicker: FC<IUIProps> = ({ darkMode }) => {
  const dispatch = useAppDispatch();

  const { font } = useAppSelector(uiSelector);

  const handleChange = (font: IFont) => dispatch(selectFont(font));

  return (
    <Listbox value={font} onChange={handleChange}>
      <div className="relative">
        <ListboxButton className="flex items-center space-x-2 focus:outline-none text-sm">
          {({ open }) => (
            <>
              <span>{font.name}</span>
              <FiChevronDown
                className={`transition-transform ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              />
            </>
          )}
        </ListboxButton>
        <ListboxOptions
          className={`absolute right-0 mt-1 w-24 shadow-md rounded-md py-1 px-1 text-sm z-50 ${
            darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
          }`}
        >
          {FONTS.map((font) => (
            <ListboxOption
              key={font.name}
              value={font}
              className={({ active }) =>
                `cursor-pointer px-2 py-1 ${
                  active ? (darkMode ? "bg-gray-600" : "bg-gray-200") : ""
                }`
              }
            >
              {font.name}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};
