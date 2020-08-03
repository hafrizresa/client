import axios from 'axios';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/todos';

axios.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    return error;
  }
);

export default axios;