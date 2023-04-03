import axios from "axios";

const http = axios.create();

const baseURL = process.env.VUE_APP_BASE_URL || "http://localhost:8000";

http.interceptors.request.use(
  function (config) {
    config.baseURL = baseURL;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use((config) => {
  if (config.status === 401) {
    console.log("Error auth");
  }
  return config;
});

export default http;
