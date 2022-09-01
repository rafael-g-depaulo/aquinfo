import axios from "axios"
import { API_HOST } from "../utils/environment"

export const api = axios.create({
  baseURL: API_HOST,
})
