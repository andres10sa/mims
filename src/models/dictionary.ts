export interface IPhonetic {
    text: string;
    audio?: string;
  }
  
  export interface IDefinition{
    definition: string;
    example?: string;
    synonyms?: string[];
  }
  
  export interface IMeaning {
    partOfSpeech: string;
    definitions: IDefinition[];
    synonyms?: string[];
    antonyms?: string[];
  }
  
  export interface IWord {
    word: string;
    phonetics: IPhonetic[];
    meanings: IMeaning[];
    phonetic: string;
    sourceUrls: string[];
  }
  