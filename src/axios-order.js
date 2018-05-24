import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://theburgerbuilder-2a1eb.firebaseio.com/'
});

export default instance;