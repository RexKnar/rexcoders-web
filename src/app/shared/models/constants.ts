import { environment } from "src/environments/environment";

export const ROUTE_CONFIG = {
    baseUrl: environment.baseUrl
  };
export const AUTH_CONFIG={
    loginUrl:"/api/auth/login",
    userRegistrationUrl:"/api/user/register"
}