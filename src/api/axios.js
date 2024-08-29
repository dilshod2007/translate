import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://deep-translate1.p.rapidapi.com/language',
    headers: { 'x-rapidapi-key': '216aaa2687msh91ec62caa74c1a8p1888b2jsnd4414ee7bbf9', 'x-rapidapi-host': 'deep-translate1.p.rapidapi.com', 'Content-Type': 'application/json' },
    method: 'POST',
});

export default instance
