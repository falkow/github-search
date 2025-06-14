export enum LangEnum {
  javascript = 'javascript',
  java = 'java',
  go = 'go',
}
export type IFormInput = {
  query: string;
  user: string;
  language: LangEnum | undefined;
};

export type ICard = {
  name: string;
  html_url: string;
  repository: {
    description: string;
    owner: { login: string; avatar_url: string };
  };
};

export type ICards = {
  status: number | undefined;
  error: string | null;
  cards: ICard[];
};

export type SettingType = {
  entriesOnSelectedPage: ICard[];
  actualPageIdx: number;
  lastPageIdx: number;
  elementsOnPage: number;
};

export type FunctionsType = {
  goToPage: (number: number) => void;
  handleEntriesChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type PaginationType = {
  postPerPage: number;
  totalPosts: number;
  paginationActions: FunctionsType;
};

export type ErrorMessageType = {
  message: string;
};
