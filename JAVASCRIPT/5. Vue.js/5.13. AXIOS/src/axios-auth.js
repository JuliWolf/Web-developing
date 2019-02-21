import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://axios-27787.firebaseio.com'
});
instance.defaults.headers.common['SOMETHING'] = 'something';


export default instance
