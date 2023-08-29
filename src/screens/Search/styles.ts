import { Input, Button, IconButton } from '@mui/material';
import styled from '@emotion/styled'

export const SearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`;

export const SearchInput = styled(Input)`
    width: 60vw;
`;

export const SearchButton = styled(Button)``;

export const ProjectsWrapper = styled.div`
    margin-top: 2rem;
`;

export const ProjectInfoWrapper = styled.div`
    margin-top: 1rem;
`;

export const SubtitleText = styled.h2``;

export const DefaultText = styled.p``;

export const BoldText = styled.strong``;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.6rem;
    align-items: center;
`;

export const FloatingButton = styled(IconButton)`
    position: fixed;
    right: 5%;
    bottom: 5%;
`;