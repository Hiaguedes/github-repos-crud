import React, { FC } from 'react'
import * as S from './styles';

export type DisplayProfileProps = {
    name: string;
    link: string;
    user: string;
    followers: string;
    following: string;
    img_link: string
}

const DisplayProfile: FC<DisplayProfileProps> = ({ followers, following, link, name, user, img_link }) => {
  return (
    <S.Wrapper>
        <S.AvatarWrapper>
            <S.ProfileAvatar src={img_link} />
        </S.AvatarWrapper>
        <S.CollumnInfoWrapper>
            <S.UserProfile href={link} target='_blank'>{user}</S.UserProfile>
            <S.TextWrapper>
                <S.BoldText>Nome:</S.BoldText>
                <S.DefaultText>{name}</S.DefaultText>
            </S.TextWrapper>
            <S.TextWrapper>
                <S.BoldText>Seguidores:</S.BoldText>
                <S.DefaultText>{followers}</S.DefaultText>
            </S.TextWrapper>
            <S.TextWrapper>
                <S.BoldText>Seguindo:</S.BoldText>
                <S.DefaultText>{following}</S.DefaultText>
            </S.TextWrapper>
        </S.CollumnInfoWrapper>
    </S.Wrapper>
  )
}

export default DisplayProfile