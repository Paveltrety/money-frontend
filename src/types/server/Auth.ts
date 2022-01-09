import { UserType } from "../User";

export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  user: UserType;
};

export type AuthRequest = {
  email: string;
  password: string;
};
