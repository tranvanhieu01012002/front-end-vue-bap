import type { AxiosResponse } from "axios";
import http from ".";

export default class BaseRepository {
  protected resource: string;
  protected baseURl: string =
    process.env.VUE_APP_BASE_URL || "http://localhost:8000";
  constructor(resource = "") {
    this.resource = resource;
    console.log("khoi tao instant ne");
  }

  async get(): Promise<AxiosResponse> {
    return await http.get(this.setUpURL());
  }

  async post(object: object): Promise<AxiosResponse> {
    return await http.post(this.setUpURL(), object);
  }

  protected setUpURL(): string {
    return `${this.baseURl}/${this.resource}`;
  }

  public setResource(resource: string) {
    this.resource = resource;
  }

  async getAtPage(page: number): Promise<AxiosResponse> {
    return await http.get(`${this.setUpURL()}?page=${page}`);
  }
}
