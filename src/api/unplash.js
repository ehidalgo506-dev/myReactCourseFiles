import axios from 'axios';

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID GkWnPsjM8engRD_WFPAACcG_9JsiQCwyimx03p0P2o4',
  },
});

export default unsplash;
