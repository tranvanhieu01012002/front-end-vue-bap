import type Account from "@/interfaces/Account";
import BaseRepository from "./BaseRepository";
import httpWithoutToken from "./axiosWithoutToken";
import { AxiosResponse } from "axios";
class UserRepository extends BaseRepository {
  async login(account: Account): Promise<AxiosResponse> {
    return await httpWithoutToken.post(this.setUpURL(), account);
  }

  async loginByGoogle(token: string): Promise<AxiosResponse> {
    this.setResource("auth/login/google");
    return await httpWithoutToken.post(this.setUpURL(), { token });
  }

  async profile(): Promise<AxiosResponse> {
    this.setResource("profile");
    return await this.get();
  }

  async getAllUser(): Promise<AxiosResponse> {
    this.setResource("users");
    return await this.get();
  }
}
export default UserRepository;
