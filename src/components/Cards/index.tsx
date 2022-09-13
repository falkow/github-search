import React, { useState } from 'react';
import { ICard, ICards } from '../../types';
import { Card } from '../Card';

import { usePagination } from './hooks';
import { Pagination } from './Pagination';
import * as S from './styles';

export const Cards = ({ cards }: ICards) => {
  const [elementsOnPage, setElementsOnPage] = useState(10);
  const [paginationState, paginationActions] = usePagination(
    cards,
    elementsOnPage
  );
  const { entriesOnSelectedPage } = paginationState;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value.replace(/\D/g, '');
    if (Number(result) < 0) return;
    setElementsOnPage(Number(result));
  };
  return (
    <S.ResultsContainer>
      <S.Title>{entriesOnSelectedPage.length > 0 && 'Results:'}</S.Title>
      {entriesOnSelectedPage.map((res: ICard, index: number) => (
        <Card {...res} key={index} />
      ))}
      {entriesOnSelectedPage.length > 0 && (
        <S.RecordsInputContainer>
          <S.Label>Number of records on page: </S.Label>
          <S.Input
            type='number'
            min={1}
            max={cards.length}
            value={elementsOnPage}
            onChange={handleChange}
          />
        </S.RecordsInputContainer>
      )}
      {cards.length > 0 && (
        <Pagination
          paginationActions={paginationActions}
          postPerPage={elementsOnPage}
          totalPosts={cards.length}
        />
      )}
    </S.ResultsContainer>
  );
};
