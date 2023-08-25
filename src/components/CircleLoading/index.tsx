import { CircularProgress } from '@mui/material'
import React, { FC, HTMLAttributes } from 'react'
import * as S from './styles';

export type CircleLoadingProps = {
    size?: number
} & HTMLAttributes<HTMLDivElement>

const  CircleLoading : FC<CircleLoadingProps> = ({size = 70, ...rest}) => {
  return (
    <S.Wrapper {...rest}>
        <CircularProgress size={size} />
    </S.Wrapper>
  )
}

export default CircleLoading