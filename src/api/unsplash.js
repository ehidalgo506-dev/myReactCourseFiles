import axios from 'axios';
import config from '../config';

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${config.accessKey}`,
  },
});
export default unsplash;
