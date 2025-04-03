import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
    //baseURL: "http://localhost:4000/",
    // baseURL: "http://192.168.8.186:4000",
    // baseURL: "https://test-api-theta-black.vercel.app/",
    baseURL: "https://tgest-api-seven.vercel.app/",
});

api.interceptors.request.use(async (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  
export default api;
