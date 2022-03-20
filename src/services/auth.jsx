import React from "react";

export const TOKEN_KEY = "atk";

export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => sessionStorage.getItem(TOKEN_KEY);
export const setToken = (token) => {
  sessionStorage.setItem(TOKEN_KEY, token);
};

export const clearToken = () => {
  localStorage.clear();
  sessionStorage.clear();
};
