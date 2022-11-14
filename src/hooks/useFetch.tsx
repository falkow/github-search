import axios from 'axios';
import { useState } from 'react';
import { IFormInput } from '../types';

export const useFetch = () => {
  const [cards, setCards] = useState([]);
  const [status, setStatus] = useState();

  const handleParams = (data: IFormInput) => {
    const tagsWithAttr: string[] = [];
    const url = new URL(location.href);
    const params = new URLSearchParams(location.search);
    Object.entries(data).map(([key, value]) => {
      tagsWithAttr.push(`${key}=${value}`);
      url.searchParams.append(key, 'value');
    });
  };

  const handleData = (data: IFormInput) => {
    const { query, user, language } = data;
    if (query.length <= 0 || user.length <= 0) {
      return;
    }
    // handleParams(data);
    const controller = new AbortController();

    axios({
      method: 'GET',
      url: `https://api.github.com/search/code?q=${query}+user:${user}+language:${language}`,
      signal: controller.signal,
    })
      .then((response) => {
        setCards(response.data.items);
        setStatus(response.data.total_count);
      })
      .catch((error) => {
        error.response.data.errors.forEach((element: any) => {
          alert(element.message);
        });
        console.log(error);
      });

    return () => {
      controller.abort();
    };
  };

  return { handleData, cards, status };
};
