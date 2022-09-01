import { JwtPayload, sign, verify } from "jsonwebtoken"
import { environment } from "../environments/environment"

// expires in 100 days. check https://github.com/vercel/ms for syntax
const expiresIn = "100 days"

export const signToken = (payload: object) => {
  const a = sign(payload, environment.jwtSecret, {
    algorithm: "HS256",
    expiresIn,
  })
  return a
}

export const verifyToken = (token: string) =>
  new Promise<JwtPayload>((resolve, reject) =>
    verify(token, environment.jwtSecret, (err, decoded) => {
      if (err) return reject(err)
      return resolve(decoded as JwtPayload)
    }),
  )
