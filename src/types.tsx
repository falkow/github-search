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
  description: string;
  login: string;
  avatar_url: string;
  // repository: { description: string };
  // owner: { login: string; avatar_url: string };
};

export type ICards = {
  cards: ICard[];
};
