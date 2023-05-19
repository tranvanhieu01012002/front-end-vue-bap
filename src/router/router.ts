import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    isAdmin?: boolean;
    requiresAuth: boolean;
    requiresOpenRoom?: boolean;
    label?: string;
    layout?: string;
  }
}
export {};
