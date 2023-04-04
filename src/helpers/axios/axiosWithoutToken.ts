import axios from "axios";

const httpWithoutToken = axios.create();

httpWithoutToken.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

httpWithoutToken.interceptors.response.use((config) => {
  if (config.status === 401) {
    console.log("Error auth");
  }
  return config;
});

export default httpWithoutToken;
