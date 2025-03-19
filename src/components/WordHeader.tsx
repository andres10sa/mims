import { FC, useMemo } from "react";
import { FaPlay } from "react-icons/fa";
import { IWord } from "@/models/dictionary";

export const WordHeader: FC<{ word: IWord }> = ({ word }) => {
  
  const audioSrc = useMemo(
    () => word?.phonetics?.find((item) => item.audio)?.audio,
    [word]
  );

  const playAudio = () => {
    const audio = new Audio(audioSrc);
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-3xl font-bold">{word?.word}</h2>
        {audioSrc && (
          <button
            onClick={playAudio}
            className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center pl-1 cursor-pointer"
          >
            <FaPlay className="text-purple-400" />
          </button>
        )}
      </div>
      <p className="text-purple-500 text-xl mb-4">{word?.phonetic}</p>
    </>
  );
};