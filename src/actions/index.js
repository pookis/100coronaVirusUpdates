import axios from 'axios';


const API_KEY = 'cd56dfba6efd49fca9d496d0cd2725b1';
const ROOT_URL = `http://newsapi.org/v2/everything?qInTitle=coronavirus&pageSize=100&language=en&?qInTitle=corona&qInTitle=corona&sortby=publishedAt&apiKey=${API_KEY}`;



export const GET_NEWS = 'get-news';

export function getNews() {
    const request = axios.get(ROOT_URL);
    console.log(request);
    return {
        type: GET_NEWS,
        payload: request
    }
}

