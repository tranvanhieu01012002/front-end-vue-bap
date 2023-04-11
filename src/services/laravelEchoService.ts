/* eslint-disable @typescript-eslint/no-explicit-any */
import Echo from "laravel-echo";
export default class LaravelEchoService {
  init() {
    console.log("start Echo");
    const token = localStorage.getItem("token");
    window.Echo = new Echo({
      auth: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      broadcaster: "socket.io",
      host: window.location.hostname + ":6001",
      forceTLS: false,
      disableStats: true,
      cluster: "eu",
    });
  }
  getEcho() {
    return window.Echo;
  }
}
//  Authorization: `Bearer ${token}`,
