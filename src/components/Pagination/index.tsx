import { useEffect, useState } from 'react';
import { PaginationType } from '../../types';
import * as S from './styles';

export const Pagination = ({
  postPerPage,
  totalPosts,
  paginationActions,
}: PaginationType) => {
  const [pageNumber, setPageNumber] = useState<number[]>([]);

  const { goToPage } = paginationActions;

  useEffect(() => {
    const pages: number[] = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
      pages.push(i);
    }
    setPageNumber(pages);
  }, [postPerPage, postPerPage]);

  return (
    <S.Nav>
      <S.List>
        {pageNumber.map((number) => {
          return (
            <S.Item key={number}>
              <S.Link href='#' onClick={() => goToPage(number)}>
                {number}
              </S.Link>
            </S.Item>
          );
        })}
      </S.List>
    </S.Nav>
  );
};
