import { REGISTER } from "./types";
import { request } from "../utils/axios";

const USER_URL = "/api/user";

export function register(dataToSubmit) {
  const data = request("post", USER_URL + "/register", dataToSubmit);

  return {
    type: REGISTER,
    payload: data,
  };
}
