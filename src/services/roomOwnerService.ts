import { useUserStore } from "@/store";
export default class RoomOwnerService {
  private userStore;

  constructor() {
    this.userStore = useUserStore();
  }

  setRoomOwner(roomOwnerId: string) {
    sessionStorage.setItem("is_owner", "1");
    this.setRoomOwnerId(roomOwnerId);
  }

  checkRoomOwner() {
    return sessionStorage.getItem("is_owner");
  }

  removeRoomOwner() {
    sessionStorage.removeItem("is_owner");
    this.userStore.roomOwnerId = "";
  }

  getRoomOwnerId(): string {
    return this.userStore.roomOwnerId;
  }
  setRoomOwnerId(roomOwnerId: string) {
    this.userStore.roomOwnerId = roomOwnerId;
  }
}
