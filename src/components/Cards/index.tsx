import React from 'react';
import { ICard, ICards } from '../../types';
import { Card } from '../Card';

export const Cards = ({ cards }: ICards) => {
  return (
    <div>
      <h2>title</h2>
      {cards.map((res: ICard, index: number) => (
        <Card {...res} key={index} />
        // <div key={index}>
        //   <p>{res.name}</p>
        //   <p>{res.html_url}</p>
        //   <p>{res.description}</p>
        //   {/* <p>{login}</p> */}
        // </div>
      ))}
    </div>
  );
};
