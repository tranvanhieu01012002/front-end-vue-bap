/* eslint-disable @typescript-eslint/no-explicit-any */
import Echo from "laravel-echo";
export default class LaravelEchoService {
  static init() {
    if (!(window.Echo instanceof Echo)) {
      const token = localStorage.getItem("token");
      window.Echo = new Echo({
        auth: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        broadcaster: "socket.io",
        host: window.location.hostname,
        // because add pass proxy to localhost so do not need add port
        // host: window.location.hostname + ":6001",
        forceTLS: false,
        disableStats: true,
        cluster: "eu",
      });
    }
  }
}
