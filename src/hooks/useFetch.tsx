import axios from 'axios';
import { useState } from 'react';
import { IFormInput } from '../types';

export const useFetch = () => {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState<boolean>();
  const [status, setStatus] = useState();

  const handleData = (data: IFormInput) => {
    const { query, user, language, numberOfElementsOnPage } = data;
    if (query.length <= 0 || user.length <= 0) {
      return;
    }
    const controller = new AbortController();

    axios({
      method: 'GET',
      url: `https://api.github.com/search/code?q=${query}+user:${user}+language:${language}`,
      // url: `https://api.github.com/search/code?q=item+language:javascript&per_page=undefined`,
      signal: controller.signal,
    })
      .then((response) => {
        setCards(response.data.items);
        setStatus(response.data.total_count);
        console.log(response);
        // 'https://api.github.com/search/code?q=item+user:falkow+language:javascript&per_page=undefined'; when cant find any matches
      })
      .catch((error) => {
        setError(true);
        setCards(error.response.data.errors);
        // useReducer? or redux?

        // error.response.data.errors.forEach((element: any) => {
        //   alert(element.message);
        // });
        console.log(error.response.data.errors);
      });

    return () => {
      controller.abort();
    };
  };

  return { handleData, cards, status, error };
};
