export { Definition } from "./Definition";
export { Definitions } from "./Definitions";
export { FontPicker } from "./FontPicker";
export { Header } from "./Header";
export { RelatedWords } from "./RelatedWords";
export { SearchBar } from "./SearchBar";
export { SearchHistory } from "./SearchHistory";
export { Sources } from "./Sources";
export { ThemeSwitcher } from "./ThemeSwitcher";
export { WordHeader } from "./WordHeader";

export interface IRelatedWordsProps {
  synonyms: string[];
  antonyms: string[];
  titleColor: string;
}

export interface IUIProps {
  darkMode: boolean;
}

export interface ISourcesProps extends IUIProps {
  sources: string[];
}

export interface ISearchHistoryProps {
  history: IHistory[];
  onSelect: (term: string) => void;
  onClose: () => void;
  darkMode: boolean;
}

export interface IHistory {
  term: string;
  timestamp: string;
}