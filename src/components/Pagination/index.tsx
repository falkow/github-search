import { useEffect, useState } from 'react';
import { PaginationType } from '../../types';
import * as S from './styles';

const Pagination = ({
  postPerPage,
  totalPosts,
  paginationActions,
}: PaginationType) => {
  const [pageNumber, setPageNumber] = useState<number[]>([]);

  const { goToPage, handleEntriesChange } = paginationActions;

  useEffect(() => {
    const pages: number[] = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
      pages.push(i);
    }
    setPageNumber(pages);
  }, [totalPosts, postPerPage]);

  return (
    <>
      <S.RecordsInputContainer>
        <S.Label>Records on page: </S.Label>
        <S.Input
          type='number'
          min={1}
          max={totalPosts}
          value={postPerPage}
          onChange={handleEntriesChange}
        />
      </S.RecordsInputContainer>
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
    </>
  );
};
export default Pagination;
