import { AUTH_API } from "../../constants/apis/auth";
import { request } from "../../utils/axios";
import { RegisterRequest } from "./index.types";

export const register = (body: RegisterRequest) => {
  return request.post(AUTH_API.REGISTER, {
    data: body,
  });
};
