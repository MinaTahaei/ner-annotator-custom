import axios from "axios";

const instance = axios.create({
  baseURL: window.location + ':5555',
  timeout: 3000,
});

export default instance;
