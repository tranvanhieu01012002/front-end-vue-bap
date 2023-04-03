import type { AxiosResponse } from "axios";
import http from ".";

export default class BaseRepository {
  protected resource: string;

  constructor(resource: string) {
    this.resource = resource;
  }

  async get(): Promise<AxiosResponse> {
    return await http.get(this.resource);
  }

  async post(object: object): Promise<AxiosResponse> {
    return await http.post(this.resource, object);
  }
}
