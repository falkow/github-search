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
  cards: ICard[];
};

export type SettingType = {
  entriesOnSelectedPage: ICard[];
  actualPageIdx: number;
  lastPageIdx: number;
};

export type FunctionsType = {
  goToPage: (number: number) => void;
};

export type PaginationType = {
  postPerPage: number;
  totalPosts: number;
  paginationActions: FunctionsType;
};
