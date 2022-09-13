import { ICard } from '../../types';
import { useVisibility } from './hooks';
import * as S from './styles';

export const Card = ({
  name,
  html_url,
  repository: {
    description,
    owner: { login, avatar_url },
  },
}: ICard) => {
  const { isVisible, toggleModal } = useVisibility();
  return (
    <S.CardContainer>
      <S.InfoContainer>
        <S.Description>File: </S.Description>
        <S.Link href={html_url} target='_blank'>
          {name}
        </S.Link>
      </S.InfoContainer>
      <S.InfoContainer>
        <S.Description>Description: </S.Description>
        <p>{description}</p>
      </S.InfoContainer>
      <S.InfoContainer>
        <S.Description>Username: </S.Description>
        <p>{login}</p>
      </S.InfoContainer>

      <S.InfoContainer className='modal'>
        <S.Button onClick={toggleModal} className='modalBtn'>
          {isVisible ? 'Hide avatar' : `Show avatar`}
        </S.Button>
        {isVisible && (
          <div className='background' onClick={toggleModal}>
            <div className='modalContainer'>
              <img src={avatar_url} alt='Owner avatar' />
            </div>
          </div>
        )}
      </S.InfoContainer>
    </S.CardContainer>
  );
};
