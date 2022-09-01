import { useQuery } from "react-query"
import { api } from "."
import { Token, useUserToken } from "../contexts/UserToken"

export const getIsLoggedIn = ({ token }: { token: Token }) =>
  api
    .post<{ payload: Record<string, string | number> }>(
      "/users/login-check",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    .then((result) => result.data)

export const useIsLoggedIn = () => {
  const { token } = useUserToken()
  const { data } = useQuery("/users/login-check", () =>
    getIsLoggedIn({ token }),
  )
  return !!token && !!data?.payload
}
