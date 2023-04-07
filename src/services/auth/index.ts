import { AUTH_API } from '../../constants/apis/auth';
import { request } from '../../utils/axios';
import { LoginRequest, LoginResponse, RegisterRequest } from './index.types';

export const register = (body: RegisterRequest) => {
  return request.post(AUTH_API.REGISTER, {
    data: body,
  });
};

export const login = (body: LoginRequest) => {
  return request.post<LoginResponse>(AUTH_API.LOGIN, body);
};