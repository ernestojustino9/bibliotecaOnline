import Cookies from "js-cookie";

export const TOKEN_KEY = "bl_admin@token";
export const USER_KEY = "bl_admin@user";

export const isAuthenticated = () => Cookies.get(TOKEN_KEY) != null;
export const getToken = () => Cookies.get(TOKEN_KEY);

export const entrar = (token) => {
  Cookies.set(TOKEN_KEY, token);
};

export const sair = () => {
  Cookies.remove(USER_KEY);
  Cookies.remove(TOKEN_KEY);
};