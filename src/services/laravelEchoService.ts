/* eslint-disable @typescript-eslint/no-explicit-any */
import Echo from "laravel-echo";
export default class LaravelEchoService {
  private echo: any;
  constructor() {
    this.init();
  }
  init() {
    console.log("start Echo");
    const token = localStorage.getItem("token");
    this.echo = new Echo({
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
    // window.Echo = new Echo({
    //   auth: {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   },
    //   broadcaster: "socket.io",
    //   host: window.location.hostname + ":6001",
    //   forceTLS: false,
    //   disableStats: true,
    //   cluster: "eu",
    // });
  }
  getEcho() {
    return this.echo;
  }
}
