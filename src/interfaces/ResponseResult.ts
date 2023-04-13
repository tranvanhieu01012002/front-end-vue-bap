import UserRank from "./UserRank";

export default interface ResponseResult {
  data: Array<UserRank>;
  socket?: string;
}
