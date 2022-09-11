// import axios, { Canceler } from 'axios';
// import React, { useCallback, useEffect, useState } from 'react';
// import { IFormInput } from './types';

// export const useFetch = () => {
//   const [loading, setLoading] = useState(true);
//   const [response, setResponse] = useState<any | null>();
//   const [error, setError] = useState(false);

//   const sendQuery = useCallback(
//     async ({ query, user, language }: IFormInput) => {
//       try {
//         setLoading(true);
//         setError(false);

//         const cancelToken = axios.CancelToken.source();

//         const response = await axios({
//           method: 'GET',
//           url: `https://api.github.com/search/code?q=${query}+user:${user}+language:${language}`,
//           cancelToken: cancelToken.token,
//         });
//         setResponse(response.data.items);
//         setLoading(false);
//       } catch (error) {
//         setError(!!error);
//       }
//     },
//     []
//   );

//   useEffect(() => {
//     setResponse([]);
//   }, []);

//   // useEffect(() => {
//   //   // sendQuery();
//   // }, [query, user, language]);
//   return { response, loading, sendQuery };
// };

////////////////////////////////
import axios, { Canceler } from 'axios';
import React, { useEffect, useState } from 'react';
import { ICards, IFormInput } from './types';

export const useFetch = ({ query, user, language }: IFormInput) => {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   setResponse([]);
  // }, [query, user, language]);

  useEffect(() => {
    setError(false);

    const cancelToken = axios.CancelToken.source();

    axios({
      method: 'GET',
      url: `https://api.github.com/search/code?q=${query}+user:${user}+language:${language}`,
      cancelToken: cancelToken.token,
    })
      .then((response) => {
        setCards(response.data.items);
        // console.log(response);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log(error);
        }
      });

    return () => {
      cancelToken.cancel();
    };
  }, [query, user, language]);
  return { cards };
};
