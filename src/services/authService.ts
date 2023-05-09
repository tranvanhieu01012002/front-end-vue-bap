import UserRepository from "@/helpers/axios/UserRepository";
import { UserInfo, UserVerifyEmail } from "@/interfaces";
import axios from "axios";

export default class AuthService {
  public readonly userRepo: UserRepository;
  public constructor() {
    this.userRepo = new UserRepository();
  }
  public async register(user: UserInfo): Promise<UserVerifyEmail> {
    try {
      const response = await this.userRepo.register(user);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      } else {
        throw new Error("different error than axios");
      }
    }
  }

  public async hasVerifiedEmail(id: string): Promise<boolean> {
    try {
      const { data } = await this.userRepo.hasVerifiedEmail(id);
      return data.status;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data.message;
      } else {
        throw new Error("different error than axios");
      }
    }
  }

  public async resendEmail(id: string): Promise<boolean> {
    try {
      const { data } = await this.userRepo.resendEmail(id);
      return data.status;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data.status;
      } else {
        throw new Error("different error than axios");
      }
    }
  }
}
