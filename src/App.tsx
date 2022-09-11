import React, { useState } from 'react';
import { useFetch } from './useFetch';
import { useForm } from 'react-hook-form';
import { IFormInput } from './types';
import { Cards } from './components/Cards';
import './App.css';

function App() {
  const [form, setForm] = useState<IFormInput>({
    query: '',
    user: '',
    language: undefined,
  });
  const { cards } = useFetch(form);
  // const { response, sendQuery, loading } = useFetch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    setForm(data);
    //nalezy zmienic docelowo zeby zwracal stringa jako query do pozniejszego zapytania
  };
  console.log(cards);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('user', { required: true })} />
        {errors.user?.type === 'required' && (
          <small>user name is required</small>
        )}
        <input {...register('query', { required: true })} />
        {errors.query?.type === 'required' && (
          <small>type what are you looking for</small>
        )}

        <select {...register('language')}>
          <option value='javascript'>javascript</option>
          <option value='java'>java</option>
          <option value='go'>go</option>
        </select>
        <button type='submit'>Szukaj</button>
      </form>
      {/* {response.map((res: any, index: number) => (
        <div key={index}>
          <p>{res.name}</p>
          <p>{res.html_url}</p>
          <p>{res.description}</p>
          <p>{login}</p>
        </div>
      ))} */}
      <Cards cards={cards} />
    </>
  );
}

export default App;
