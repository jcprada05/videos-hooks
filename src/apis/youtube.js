import axios from 'axios';

const KEY = 'AIzaSyAkHmQMcp11OL0dPZNJkqixg2yrQItrvVg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
