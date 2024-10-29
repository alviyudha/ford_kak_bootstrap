import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,  // Optional: Setting a timeout for requests
});

export default axiosInstance;