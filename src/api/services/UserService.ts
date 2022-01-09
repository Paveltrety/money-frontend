import $api from "../http";
import { AxiosResponse } from "axios";
import { UserType } from "../../types/User";

export default class UserService {
  static async fetchUsers(): Promise<AxiosResponse<UserType[]>> {
    return $api.get<UserType[]>("/users");
  }
}
