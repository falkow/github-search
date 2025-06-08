import axios from 'axios';
import { useState } from 'react';
import { IFormInput } from '../types';

export const useFetch = () => {
  const [cards, setCards] = useState([]);
  const [status, setStatus] = useState();
  const [error, setError] = useState<string | null>(null);

  const gitHubToken = import.meta.env.VITE_GITHUB_TOKEN;

  const handleData = (data: IFormInput) => {
    const { query, user, language } = data;
    if (query.length <= 0 || user.length <= 0) {
      return;
    }
    const controller = new AbortController();

    axios({
      method: 'GET',
      url: `https://api.github.com/search/code?q=${query}+user:${user}+language:${language}`,
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${gitHubToken}`,
      },
    })
      .then((response) => {
        setCards(response.data.items);
        setStatus(response.data.total_count);
      })
      .catch((error) => {
        if (error.response) {
          switch (error.response.status) {
            case 401:
              setError('Error 401: Unauthorized access. Check token.');
              break;
            case 403:
              setError('Error 403: GitHub API query limit exceeded.');
              break;
            case 404:
              setError('Error 404: No results found.');
              break;
            default:
              setError(`API error: ${error.response.data.message}`);
          }
        } else if (error.request) {
          setError('No response from server. Check your internet connection.');
        } else {
          setError(`Error: ${error.message}`);
        }
        console.error('Query error: ', error);
      });

    return () => {
      controller.abort();
    };
  };

  return { handleData, cards, status, error };
};
