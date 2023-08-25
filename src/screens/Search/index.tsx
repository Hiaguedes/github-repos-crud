import React, { useCallback, useEffect, useState } from 'react'
import * as S from './styles';
import CircleLoading from '@src/components/CircleLoading';
import DisplayProfile from '@src/components/DisplayProfile';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

function Screen() {

    const searchParams = useSearchParams()
    const query = searchParams.get('query')
    const [searchValue, setSearchValue] = useState('');
    const router = useRouter();

    const onButtonSearchClick = useCallback(() => {
        router.query.query = searchValue;

        router.push(router);

    }, [searchValue]);

    useEffect(() => {
        if(query){
            setSearchValue(query)
            console.log(`fazer chamada de usuario ${query}`)
        }
    }, [searchParams]);

    const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if(evt.key === 'Enter'){
            onButtonSearchClick()
        }
    }

  return (
    <div>
        <S.SearchWrapper>
            <S.SearchInput 
                onKeyDown={handleKeyDown} 
                value={searchValue} 
                onChange={evt => setSearchValue(evt.target.value)} 
                placeholder='git user' 
            />
            <S.SearchButton 
                onClick={onButtonSearchClick} 
                variant='contained'>
                    Pesquisar
            </S.SearchButton>
        </S.SearchWrapper>
        <CircleLoading />
        <DisplayProfile />
        <S.ProjectsWrapper>

            <S.SubtitleText>Projetos</S.SubtitleText>
            <S.ProjectInfoWrapper>
            <S.TextWrapper>
                <S.BoldText>Numero de Repositorios Publicos:</S.BoldText>
                <S.DefaultText>50</S.DefaultText>
            </S.TextWrapper>
            <S.TextWrapper>
                <S.BoldText>Numero de Gists Publicos:</S.BoldText>
                <S.DefaultText>20</S.DefaultText>
            </S.TextWrapper>
            </S.ProjectInfoWrapper>
        </S.ProjectsWrapper>
    </div>
  )
}

export default Screen