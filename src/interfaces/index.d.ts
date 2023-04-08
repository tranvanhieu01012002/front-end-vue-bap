/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
  interface Window {
    Pusher: any;
    Echo: any;
  }
}

declare module "laravel-echo" {
  interface Echo {
    channel: any;
  }
}
