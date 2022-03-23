import { ServerURI } from "@/configs/constants";
import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx) {
  const { "cmf-01": token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: ServerURI,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });

  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  return api;
}
