import axios from 'axios';
import { useState } from 'react';
import { IFormInput } from '../types';

export const useFetch = () => {
  const [cards, setCards] = useState([]);
  const [status, setStatus] = useState();
  const [error, setError] = useState<string | null>(null);

  const gitHubToken = import.meta.env.VITE_GITHUB_TOKEN;
  console.log(gitHubToken);
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
              setError('Błąd 401: Nieautoryzowany dostęp. Sprawdź token.');
              break;
            case 403:
              setError('Błąd 403: Przekroczono limit zapytań do GitHub API.');
              break;
            case 404:
              setError('Błąd 404: Nie znaleziono wyników.');
              break;
            default:
              setError(`Błąd API: ${error.response.data.message}`);
          }
        } else if (error.request) {
          setError(
            'Brak odpowiedzi od serwera. Sprawdź połączenie internetowe.'
          );
        } else {
          setError(`Błąd: ${error.message}`);
        }
        console.error('Błąd zapytania:', error);
      });

    return () => {
      controller.abort();
    };
  };

  return { handleData, cards, status, error };
};
