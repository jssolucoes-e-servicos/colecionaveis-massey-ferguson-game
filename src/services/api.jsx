import { ServerURI } from "@/configs/constants";
import axios from "axios";
import { parseCookies } from "nookies";
import { toast } from "react-toastify";


const { "cmf-01": token } = parseCookies();

const API = axios.create({
  baseURL: ServerURI,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

if (token) {
  console.log(`token: ${token}`);
  API.defaults.headers['Authorization'] = `Bearer ${token}`;
}

API.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      sessionStorage.clear();
      localStorage.clear();
      toast.error("O tempo de sua seção expirou, faça login novamente.");
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        }
      }
    }
    return Promise.reject(error);
  }
);

export default API;
