import { UserType } from "../../types/User";
import { TYPES } from "./actionTypes";

export const updateUserInfo = (data: UserType | null) => ({
  type: TYPES.UPDATE_USER_INFO,
  payload: data,
});

export const login = (email: string, password: string) => ({
  type: TYPES.LOGIN,
  payload: {
    email,
    password,
  },
});

export const registration = (email: string, password: string) => ({
  type: TYPES.REGISTRATION,
  payload: {
    email,
    password,
  },
});

export const logout = () => ({
  type: TYPES.LOGOUT,
});

export const checkAuth = () => ({
  type: TYPES.CHECK_AUTH,
});
