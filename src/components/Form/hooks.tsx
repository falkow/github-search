import axios from 'axios';
import { useEffect, useState } from 'react';
import { IFormInput } from '../../types';

export const useFetch = (data: IFormInput) => {
  const [cards, setCards] = useState([]);

  const { query, user, language } = data;

  const handleParams = (data: any) => {
    const tagsWithAttr: string[] = [];
    const url = new URL(location.href);
    const params = new URLSearchParams(location.search);
    Object.entries(data).map(([key, value]) => {
      tagsWithAttr.push(`${key}=${value}`);
      url.searchParams.append(key, 'value');
    });
  };

  useEffect(() => {
    if (query.length <= 0 || user.length <= 0) {
      return;
    }
    handleParams(data);
    const controller = new AbortController();

    axios({
      method: 'GET',
      url: `https://api.github.com/search/code?q=${query}+user:${user}+language:${language}`,
      signal: controller.signal,
    })
      .then((response) => {
        setCards(response.data.items);
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
  }, [query, user, language]);
  return { cards };
};
