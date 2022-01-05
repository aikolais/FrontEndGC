import axios from 'axios'

const api = axios.create({
    baseURL: "http://grcauth.greendocs.net"
  });

  export default api;
  