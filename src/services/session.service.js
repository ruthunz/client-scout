import axios from "axios";
import { Navigate } from "react-router-dom";

const baseUrl = "http://localhost:3000/v1";

const login = async (credentials) => {
  try {
    const { data } = await axios.post(`${baseUrl}/auth/login`, credentials);
    setSession(data);
  } catch (error) {
    window.alert("usuario o contraseña incorrectos");
  }
};

const logout = async () => {
  try {
    const refreshToken = { refreshToken: getRefreshToken() };
    await axios.post(`${baseUrl}/auth/logout`, refreshToken);
    clearSession();
  } catch (error) {
    clearSession();
  }
};

const setSession = (user) => {
  window.sessionStorage.setItem("brownseaSession", JSON.stringify(user));
};

const getSessionUser = () => {
  return JSON.parse(window.sessionStorage.getItem("brownseaSession")).user;
};

const getSessionToken = () => {
  return `Bearer ${
    JSON.parse(window.sessionStorage.getItem("brownseaSession")).tokens.access
      .token
  }`;
};

const getRefreshToken = () => {
  return JSON.parse(window.sessionStorage.getItem("brownseaSession")).tokens
    .refresh.token;
};

const isLogged = () => {
  return window.sessionStorage.getItem("brownseaSession") ? true : false;
};

const clearSession = () => {
  window.sessionStorage.removeItem("brownseaSession");
};

export default {
  login,
  logout,
  setSession,
  getSessionToken,
  getSessionUser,
  getRefreshToken,
  isLogged,
  clearSession,
};
