import { ICard, ICards } from '../../types';
import { Card } from '../Card';

import { usePagination } from '../../hooks/usePagination';
import { Pagination } from '../Pagination';
import * as S from './styles';

export const Cards = ({ cards }: ICards) => {
  const [paginationState, paginationActions] = usePagination(cards);
  const { entriesOnSelectedPage, elementsOnPage } = paginationState;

  return (
    <S.ResultsContainer>
      {entriesOnSelectedPage.length > 0 && (
        <>
          <S.Title>Results:</S.Title>
          {entriesOnSelectedPage.map((res: ICard, index: number) => (
            <Card {...res} key={index} />
          ))}

          <Pagination
            paginationActions={paginationActions}
            postPerPage={elementsOnPage}
            totalPosts={cards.length}
          />
        </>
      )}
    </S.ResultsContainer>
  );
};
