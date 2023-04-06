import axios from "axios";
import nProgress from "nprogress";
const httpWithoutToken = axios.create();

httpWithoutToken.interceptors.request.use(
  function (config) {
    nProgress.start();
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
  nProgress.done();

  return config;
});

export default httpWithoutToken;
