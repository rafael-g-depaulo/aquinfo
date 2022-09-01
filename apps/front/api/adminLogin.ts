import { useMutation } from "react-query"
import { api } from "."

interface LoginInfo {
  email: string
  password: string
}

export const loginAdmin = ({ email, password }: LoginInfo) =>
  api
    .post<{ token: string }>("/users/login", { email, password })
    .then((data) => data.data)

export const useMutateLogin = () =>
  useMutation(["/users/login"], ({ email, password }: LoginInfo) =>
    loginAdmin({ email, password }),
  )
