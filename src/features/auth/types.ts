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
  }
  