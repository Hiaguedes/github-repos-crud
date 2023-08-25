import axios from "axios";

export type getGithubUserResponse = {
    login: string;
    avatar_url: string;
    html_url: string;
    public_repos: number;
    followers: string;
    following: string;
    public_gists: number;
    name: string
}

const getGithubUser = (user: string) => {
    return axios.get<getGithubUserResponse>(`https://api.github.com/users/${user}`, {
        headers: {
            Accept: 'application/json',
        }
    })
}

export default getGithubUser;