import * as bearerToken from "express-bearer-token"
import { Response, Request, NextFunction } from "express"
import { verifyToken } from "../utils/token"

export const loggedIn = [
  bearerToken(),
  (req: Request, res: Response, next: NextFunction) => {
    verifyToken(req.token)
      .then((payload) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ;(req as any).jwt_payload = payload
        next()
      })
      .catch(() => res.status(500).json({ message: "invalid token" }))
  },
]
