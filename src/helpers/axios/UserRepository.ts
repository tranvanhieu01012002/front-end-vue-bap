import type Account from "@/interfaces/Account";
import BaseRepository from "./BaseRepository";
import httpWithoutToken from "./axiosWithoutToken";
import { AxiosResponse } from "axios";
import { UserInfo } from "@/interfaces";
class UserRepository extends BaseRepository {
  async login(account: Account): Promise<AxiosResponse> {
    return await httpWithoutToken.post(this.setUpURL(), account);
  }

  async loginByGoogle(token: string): Promise<AxiosResponse> {
    this.setResource("auth/login/google");
    return await httpWithoutToken.post(this.setUpURL(), { token });
  }

  async register(user: UserInfo): Promise<AxiosResponse> {
    this.setResource("auth/register");
    return await httpWithoutToken.post(this.setUpURL(), user);
  }

  async hasVerifiedEmail(id: string): Promise<AxiosResponse> {
    this.setResource("verify-email");
    return await httpWithoutToken.get(`${this.setUpURL()}/${id}`);
  }

  async resendEmail(id: string): Promise<AxiosResponse> {
    this.setResource("resend");
    return await httpWithoutToken.get(`${this.setUpURL()}/${id}`);
  }

  async profile(): Promise<AxiosResponse> {
    this.setResource("profile");
    return await this.get();
  }

  async getAllUser(): Promise<AxiosResponse> {
    this.setResource("users");
    return await this.get();
  }

  async updateUser(user: UserInfo): Promise<AxiosResponse> {
    this.setResource("profile");
    return await this.update(user.id, user);
  }

  async updateImage(id: string, file: File): Promise<AxiosResponse> {
    this.setResource(`profile/${id}`);
    const form = new FormData();
    form.append("image", file);
    return await this.post(
      { ...form, _method: "PUT" },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }
}
export default UserRepository;
