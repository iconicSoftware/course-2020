import axios from 'axios';
import { URL } from './global';

export const getNew = async (topic = "football") => {
    
    return await axios.get(`http://newsapi.org/v2/everything?q=${topic}&from=2020-06-18&sortBy=publishedAt&apiKey=ec48c450be414c4a8f9932a84015d2a6`);

}
