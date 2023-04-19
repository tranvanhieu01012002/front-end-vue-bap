import { router } from "@/router";

export default class EnableEditQuestion {
  public readonly status: boolean;
  constructor() {
    if (router.currentRoute.value.path.includes("set-questions")) {
      this.status = true;
    } else {
      this.status = false;
    }
  }
}
