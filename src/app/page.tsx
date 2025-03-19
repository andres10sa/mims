
"use client";
import { Definitions, Header } from "@/components";
import { dictionarySelector } from "@/redux/dictionary/slice";
import { useAppSelector } from "@/redux/store/hooks";
import { uiSelector } from "@/redux/ui/slice";

export default function DictionaryPage() {
   const { darkMode } = useAppSelector(uiSelector);
  const { definitions } = useAppSelector(dictionarySelector);

  return (
    <div
      className={`min-h-screen transition-colors ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8 py-6">
        <Header />
        {!!definitions.length && <Definitions />}
      </div>
    </div>
  );
}
