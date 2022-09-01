import { ReactNode, createContext, useContext } from "react"
import { useLocalStorage } from "usehooks-ts"

export type Token = string | null

export type TokenContext = {
  token: Token
  setToken: (t: Token) => void
}

const userTokenContext = createContext<TokenContext>(null)

export const UserTokenContext = ({ children }: { children?: ReactNode }) => {
  const [token, setToken] = useLocalStorage<Token>("session-token", null)

  return (
    <userTokenContext.Provider value={{ token, setToken }}>
      {children}
    </userTokenContext.Provider>
  )
}

export const useUserToken = () => useContext(userTokenContext)
