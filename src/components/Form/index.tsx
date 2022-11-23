import { useFetch } from '../../hooks/useFetch';
import { useForm } from 'react-hook-form';
import { IFormInput } from '../../types';
import { Cards } from '../Cards';
import * as S from './styles';

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const { handleData, cards, status } = useFetch();

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
        <Cards cards={cards} status={status} />
      </S.Container>
    </>
  );
}

export default Form;
