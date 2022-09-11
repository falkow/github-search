import React from 'react';
import { ICard } from '../../types';
// 1.nazwa pliku + przycisk odsyłający do pliku na stronie githuba {name,html_url}
// 2.opis repozytorium (description) {repository.description}
// 3.nazwę użytkownika będącego właścicielem repozytorium (owner) + przycisk
// otwierający w modalu podgląd jego awatara {owner.login,avatar_url}
export const Card = ({
  name,
  html_url,
  description,
  login,
  avatar_url,
}: // repository: { description },
// owner: { login, avatar_url },
ICard) => {
  return (
    <div>
      <a href={html_url} target='_blank'>
        {name}
      </a>
      {/* <p>{description}</p> */}
      {/* <p>{login}</p> */}
    </div>
  );
};
