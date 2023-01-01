import React, { Suspense } from 'react';

// import { Cards } from '../Cards';
import { useFetch } from '../../hooks/useFetch';
import { useForm } from 'react-hook-form';
import { IFormInput } from '../../types';
import * as S from './styles';
import { usePagination } from '../../hooks/usePagination';
// import Pagination from '../Pagination';
const Pagination = React.lazy(() => import('../Pagination'));
const Info = React.lazy(() => import('../Info'));
const Cards = React.lazy(() => import('../Cards'));

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const { handleData, cards, error, status } = useFetch();
  const [{ entriesOnSelectedPage, elementsOnPage }, paginationActions] =
    usePagination(cards);

  return (
    <>
      <S.Container>
        <S.Form onSubmit={handleSubmit(handleData)}>
          <S.Title>Search on GitHub:</S.Title>

          <S.Description>
            Search through repositories on GitHub to find interesting files
          </S.Description>

          <S.InputContainer>
            <S.InputLabel>Query:</S.InputLabel>
            <S.Input {...register('query', { required: true })} />
            {errors.query?.type === 'required' && (
              <S.Small>Type what are you looking for</S.Small>
            )}
          </S.InputContainer>

          <S.InputContainer>
            <S.InputLabel>User:</S.InputLabel>
            <S.Input
              {...register('user', {
                required: true,
                minLength: {
                  value: 4,
                  message: 'Username is too short - min 4 characters',
                },
              })}
            />
            {errors.user?.type === 'required' && (
              <S.Small>Username is required</S.Small>
            )}
            {errors.user && <S.Small>{errors.user?.message}</S.Small>}
          </S.InputContainer>

          <S.InputContainer>
            <S.InputLabel>Language: </S.InputLabel>
            <S.Select {...register('language')}>
              <S.Option value='javascript'>javascript</S.Option>
              <S.Option value='java'>java</S.Option>
              <S.Option value='go'>go</S.Option>
            </S.Select>
          </S.InputContainer>

          <S.Button type='submit'>Search</S.Button>
        </S.Form>
        {status === 0 && <Info text="Can't find any matching results" />}
        {/* {error && <Info text={cards} />} */}
        {/* TODO: ogarnac niezalezne wyswietlanie cards od errors -> może usereducer? */}
        {/* TODO: WRapper??? */}
        {cards.length > 0 && (
          <>
            <Cards cards={entriesOnSelectedPage} status={status} />
            <Pagination
              paginationActions={paginationActions}
              postPerPage={elementsOnPage}
              totalPosts={cards.length}
            />
          </>
        )}
      </S.Container>
    </>
  );
}

export default Form;
