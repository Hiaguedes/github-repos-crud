import React from 'react'
import * as S from './styles';

const DisplayProfile = () => {
  return (
    <S.Wrapper>
        <S.AvatarWrapper>
            <S.ProfileAvatar src='https://placehold.co/250x250' />
        </S.AvatarWrapper>
        <S.CollumnInfoWrapper>
            <S.UserProfile href='https://github.com/Hiaguedes' target='_blank'>augusto_per</S.UserProfile>
            <S.TextWrapper>
                <S.BoldText>Nome:</S.BoldText>
                <S.DefaultText>Augusto Pederneiras</S.DefaultText>
            </S.TextWrapper>
            <S.TextWrapper>
                <S.BoldText>Seguidores:</S.BoldText>
                <S.DefaultText>100</S.DefaultText>
            </S.TextWrapper>
            <S.TextWrapper>
                <S.BoldText>Seguindo:</S.BoldText>
                <S.DefaultText>100</S.DefaultText>
            </S.TextWrapper>
        </S.CollumnInfoWrapper>
    </S.Wrapper>
  )
}

export default DisplayProfile