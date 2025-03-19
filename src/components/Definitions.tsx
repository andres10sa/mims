"use client";
import { IDefinition } from "@/models/dictionary";
import { dictionarySelector } from "@/redux/dictionary/slice";
import { useAppSelector } from "@/redux/store/hooks";
import { uiSelector } from "@/redux/ui/slice";
import { Sources, RelatedWords, Definition, WordHeader } from ".";

export const Definitions= () => {
  const { font, darkMode } = useAppSelector(uiSelector);

  const { definitions: data } = useAppSelector(dictionarySelector);
  const [word] = data;
  const titleColor = darkMode ? "text-white" : "text-gray-500";

  return (
    <div className={font.className}>
      <WordHeader word={word} />
      {data.map(({ meanings, sourceUrls, word }, index) => (
        <div className="mb-4" key={`${word}${index}`}>
          {meanings.map(
            ({ definitions, partOfSpeech, synonyms, antonyms }: any) => (
              <article className="mb-6" key={partOfSpeech}>
                <div className="flex items-center gap-2">
                  <h3 className="italic font-bold">{partOfSpeech}</h3>
                  <hr className="flex-1 border-gray-300" />
                </div>
                <ul
                  className={`list-disc list-outside space-y-2 text-sm marker:text-purple-500 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <h4 className={`font-bold mt-6 mb-2.5 ${titleColor}`}>
                    Meaning
                  </h4>
                  {definitions.map((definition: IDefinition) => (
                    <Definition key={definition.definition} {...definition} />
                  ))}
                </ul>
                <RelatedWords
                  antonyms={antonyms}
                  synonyms={synonyms}
                  titleColor={titleColor}
                />
              </article>
            )
          )}
          <Sources darkMode={darkMode} sources={sourceUrls} />
        </div>
      ))}
    </div>
  );
};
