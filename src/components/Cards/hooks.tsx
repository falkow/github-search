import { useState } from 'react';
import { SettingType, FunctionsType, ICard } from '../../types';

export const usePagination = (
  dataEntries: ICard[],
  elementsOnPage: number
): [SettingType, FunctionsType] => {
  const [actualPageIdx, setActualPageIdx] = useState(1);

  const handleNumberOfPages = (
    dataEntries: ICard[],
    elementsOnPage: number
  ) => {
    if (dataEntries.length <= elementsOnPage) {
      return Math.ceil(dataEntries.length / elementsOnPage);
    } else {
      return Math.floor(dataEntries.length / elementsOnPage);
    }
  };
  const indexOfLastItemOnPage = actualPageIdx * elementsOnPage;
  const indexOfFirstItemOnPage = indexOfLastItemOnPage - elementsOnPage;
  const lastPageIdx = handleNumberOfPages(dataEntries, elementsOnPage);
  const entriesOnSelectedPage = dataEntries.slice(
    indexOfFirstItemOnPage,
    indexOfLastItemOnPage
  );
  const paginationState: SettingType = {
    entriesOnSelectedPage,
    actualPageIdx,
    lastPageIdx,
  };

  const goToPage = (number: number) => {
    setActualPageIdx(number);
  };

  const paginationActions: FunctionsType = {
    goToPage,
  };
  return [paginationState, paginationActions];
};
