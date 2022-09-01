import { ReactNode, createContext, useState } from "react"

type Token = null | string

type TokenContext = {
  token: Token
  setToken: (t: Token) => void
}

const userTokenContext = createContext<TokenContext>(null)

export const UserTokenContext = ({ children }: { children?: ReactNode }) => {
  const [token, setToken] = useState<Token>(null)
  console.log("token", token)

  return (
    <userTokenContext.Provider value={{ token, setToken }}>
      {children}
    </userTokenContext.Provider>
  )
}
