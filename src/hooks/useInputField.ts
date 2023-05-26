import { Account, UserInfo } from "@/interfaces";

export const useInputField = () => {
  const inputUserValue = (
    property: string,
    value: string,
    userInfo: UserInfo
  ) => {
    const nameKey = property as keyof UserInfo;
    userInfo[nameKey] = value;
  };

  const inputAccountValue = (
    property: string,
    value: string,
    account: Account
  ) => {
    const nameKey = property as keyof Account;
    account[nameKey] = value;
  };

  return { inputUserValue, inputAccountValue };
};
