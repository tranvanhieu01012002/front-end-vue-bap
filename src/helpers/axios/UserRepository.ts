import type Account from "@/interfaces/Account";
import BaseRepository from "./BaseRepository";
import httpWithoutToken from "./axiosWithoutToken";
class UserRepository extends BaseRepository {
  async login(account: Account) {
    return await httpWithoutToken.post(this.setUpURL(), account);
  }
  async profile() {
    this.setResource("profile");
    return await this.get();
  }
}
export default UserRepository;
