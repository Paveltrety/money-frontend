import $api, { API_URL } from "../http";
import { AuthRequest, AuthResponse } from "../../types/server/Auth";
import axios from "axios";

export default class AuthService {
  static async login({ email, password }: AuthRequest) {
    try {
      const { data: result } = await $api.post<AuthResponse>("/login", {
        email,
        password,
      });
      return {
        result,
      };
    } catch (error) {
      return {
        error,
      };
    }
  }

  static registration({ email, password }: AuthRequest) {
    try {
      $api
        .post<AuthResponse>("/registration", {
          email,
          password,
        })
        .then((result) => {
          return result;
        });
    } catch (error) {
      return error;
    }
  }

  static async logout() {
    try {
      const { data: result } = await $api.post("/logout");
      return {
        result,
      };
    } catch (error) {
      return {
        error,
      };
    }
  }

  static async checkAuth() {
    try {
      const { data: result } = await axios.get(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      return { result };
    } catch (error) {
      return {
        error,
      };
    }
  }
}
