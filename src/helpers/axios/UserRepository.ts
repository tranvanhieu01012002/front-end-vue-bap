import type Account from "@/interfaces/Account";
import BaseRepository from "./BaseRepository";

class UserRepository extends BaseRepository {
  async login(account: Account) {
    return await this.post(account);
  }
}
export default UserRepository;
