import "laravel-echo";

declare module "laravel-echo" {
  interface Echo {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    channel: any;
  }
}
export {};
