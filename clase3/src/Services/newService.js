import axios from 'axios';
import { URL } from './global';

export const getNew = async (topic) => {
    
    return await axios.get(`${URL}q=${topic}&from=2020-06-28&sortBy=publishedAt&apiKey=ec48c450be414c4a8f9932a84015d2a6`);

}
