import { User } from '../../models/user';
import { BaseResponse } from '../shared/types';

export interface RegisterRequest {
  email: string;
  password: string;
  phone_number: string;
  username: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse
  extends BaseResponse<{ token?: string, user?: User }> {}
