import { FC } from "react";
import { IDefinition } from "@/models/dictionary";

export const Definition: FC<IDefinition> = ({ definition, example }) => {
  return (
    <li>
      {definition}
      {example && (
        <p className="mt-1 text-gray-500 text-sm italic">"{example}"</p>
      )}
    </li>
  );
};
