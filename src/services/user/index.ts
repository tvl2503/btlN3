import { USER_APIS } from "../../constants/apis/user";
import { request } from "../../utils/axios";

export const getInfoUser = () => {
  return request.get(USER_APIS.GET_INFO);
};
