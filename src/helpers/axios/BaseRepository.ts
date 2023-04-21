import type { AxiosResponse } from "axios";
import http from ".";

export default class BaseRepository {
  protected resource: string;
  protected baseURl: string =
    process.env.VUE_APP_BASE_URL || "http://localhost:8000";
  constructor(resource = "") {
    this.resource = resource;
  }

  async get(config?: object): Promise<AxiosResponse> {
    return await http.get(this.setUpURL(), config);
  }

  async post(object?: object, config?: object): Promise<AxiosResponse> {
    return await http.post(this.setUpURL(), object, config);
  }

  async delete(id: string | number, config?: object): Promise<AxiosResponse> {
    return await http.delete(`${this.setUpURL()}/${id}`, config);
  }

  async update(
    id: string | number,
    object: object,
    config?: object
  ): Promise<AxiosResponse> {
    return await http.put(`${this.setUpURL()}/${id}`, object, config);
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

  public getConfigSocketId(): object {
    const token = localStorage.getItem("token");
    return {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        "X-Socket-ID": window.Echo.socketId(),
      },
    };
  }
}
