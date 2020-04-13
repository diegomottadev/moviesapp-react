import axios from 'axios';

const baseUrl = 'http://www.omdbapi.com/?apiKey=ffd0c3a5';
//con esto podes hacer post, put,get , patch
export const apiCall = (url,data, headers,method) => axios({
    method,
    url: baseUrl + url,
    data,
    headers
});