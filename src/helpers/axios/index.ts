import axios from "axios";
import { router } from "@/router/index";
import nProgress from "nprogress";
const http = axios.create();
http.interceptors.request.use(
  function (config) {
    nProgress.start();
    const token = localStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  async function (response) {
    // await sleep();
    nProgress.done();
    return response;
  },
  function (error) {
    switch (error.response.status) {
      case 401:
        console.log("401 r kia");
        localStorage.removeItem("token");
        return;
      case 403:
        return router.push({ name: "home" });
      default:
        return Promise.reject(error);
    }
  }
);
export function sleep(ms = 2000): Promise<void> {
  console.log("Kindly remember to remove `sleep`");
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export default http;
