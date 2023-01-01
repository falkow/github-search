import React, { Suspense } from 'react';
import { ICard, ICards } from '../../types';

const Card = React.lazy(() => import('../Card'));

import * as S from './styles';

const Cards = ({ cards, status }: ICards) => {
  return (
    <Suspense
      fallback={
        <div style={{ color: 'red', fontSize: '32px' }}>Loading...</div>
      }>
      <S.ResultsContainer>
        {
          <>
            <S.Title>Results:</S.Title>
            {cards.map((res: ICard, index: number) => (
              <Card {...res} key={index} />
            ))}
          </>
        }
      </S.ResultsContainer>
    </Suspense>
  );
};

export default Cards;
