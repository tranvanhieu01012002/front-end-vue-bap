export default class RoomOwnerService {
  static setRoomOwner() {
    sessionStorage.setItem("is_owner", "1");
  }

  static checkRoomOwner() {
    return sessionStorage.getItem("is_owner");
  }

  static removeRoomOwner() {
    sessionStorage.removeItem("is_owner");
  }
}
