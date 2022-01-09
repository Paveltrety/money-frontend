import { UserType } from "../types/User";
import { updateUserInfo } from "./user/userActions";

export type InitialUserState = {
  info: UserType | null;
};

export type ActionUserReducerType = ReturnType<typeof updateUserInfo>;

export type Result<T> = {
  result?: T;
  error?: string;
};
