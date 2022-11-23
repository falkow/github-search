import { ICard, ICards } from '../../types';
import { Card } from '../Card';

import { usePagination } from '../../hooks/usePagination';
import { Pagination } from '../Pagination';
import * as S from './styles';
import { Info } from '../Info';

export const Cards = ({ cards, status }: ICards) => {
  const [paginationState, paginationActions] = usePagination(cards);
  const { entriesOnSelectedPage, elementsOnPage } = paginationState;
  // console.log(cards);
  return (
    <S.ResultsContainer>
      {status === 0 && <Info />}
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
