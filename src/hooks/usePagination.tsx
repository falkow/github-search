import { useState } from 'react';
import { SettingType, FunctionsType, ICard } from '../types';

export const usePagination = (
  dataEntries: ICard[]
): [SettingType, FunctionsType] => {
  const [actualPageIdx, setActualPageIdx] = useState(1);
  const [elementsOnPage, setElementsOnPage] = useState(10);

  const handleEntriesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value.replace(/\D/g, '');
    if (Number(result) <= 0) return;
    setElementsOnPage(Number(result));
  };

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
    elementsOnPage,
  };

  const goToPage = (number: number) => {
    setActualPageIdx(number);
  };

  const paginationActions: FunctionsType = {
    goToPage,
    handleEntriesChange,
  };
  return [paginationState, paginationActions];
};
