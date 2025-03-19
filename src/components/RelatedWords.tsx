import { FC } from "react";
import { IRelatedWordsProps } from ".";

export const RelatedWords: FC<IRelatedWordsProps> = ({
  antonyms,
  synonyms,
  titleColor,
}) => (
  <>
    {["synonyms", "antonyms"].map((type) => {
      const words = type === "synonyms" ? synonyms : antonyms;
      return (
        !!words.length && (
          <div key={type} className=" text-sm mt-4">
            <h4 className={`font-bold ${titleColor} capitalize mr-2 inline`}>
              {type}:
            </h4>
            <span className="text-purple-500 font-bold">
              {words.join(" - ")}
            </span>
          </div>
        )
      );
    })}
  </>
);

  