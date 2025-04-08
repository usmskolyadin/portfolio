export interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface UserResponse {
  id: number;
  name: string;
  email: string;
  password: string;
  is_admin: boolean;
}

export interface JWTPayload {
  id: Number;
  email: string;
}

export interface JWTResponse {
  user: UserResponse;
  access_token: string;
  refresh_token: string;
}