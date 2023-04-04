import axios from "axios";

const http = axios.create();
http.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
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
