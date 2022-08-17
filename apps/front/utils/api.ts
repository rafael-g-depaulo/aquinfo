import axios from "axios";
import { API_HOST } from "./environment";

export const api = axios.create({
  baseURL: API_HOST
});
