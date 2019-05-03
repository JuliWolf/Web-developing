import axios from 'axios';

const instance = axios.create({
  baseURL: 'http swapi.co/api/'
});
instance.defaults.headers.common['SOMETHING'] = 'something';


export default instance
