"use client";
import { FC, Fragment } from "react";
import { ISourcesProps } from ".";

export const Sources: FC<ISourcesProps> = ({ sources, darkMode }) => {
  return (
    <>
      <hr className="border-gray-300 my-4" />
      <p
        className={`text-xs mt-4 ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        Sources:&nbsp;
        {sources.map((source, index) => (
          <Fragment key={`${source}${index}`}>
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="underline"
              aria-label={`Reference link to ${source}`}
            >
              {source}
            </a>
            {index < sources.length - 1 && " - "}
          </Fragment>
        ))}
      </p>
    </>
  );
};
