import styled from "@emotion/styled";

export const Wrapper = styled.div`
    border: 1px solid black;
    border-radius: 15px;
    min-height: 200px;
    width: 100%;
    padding: 1rem;
    max-height: 500px;

    display: flex;
    flex-direction: row;
    gap: 5rem;
`;

export const UserProfile = styled.a`
    color: black;
    font-size: 3rem;
    margin-bottom: 1.5rem;
`;

export const CollumnInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

export const AvatarWrapper = styled.div``;

export const ProfileAvatar = styled.img`
    border-radius: 100%;
    width: 150px;
`;

export const DefaultText = styled.p``;

export const BoldText = styled.strong``;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.6rem;
    align-items: center;
`;