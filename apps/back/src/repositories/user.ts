import { PrismaClient } from "@db"
import { generateHash, generateSalt } from "../utils/hash"

interface UserInfo {
  email: string
  password: string
}
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

export const createUser = async (
  { email, password }: UserInfo,
  db: PrismaClient,
) => {
  console.log(emailRegex, email, emailRegex.test(email))
  if (!emailRegex.test(email)) throw { err: "invalid email format" }
  if (!email || !password) throw { err: "incomplete user credentials" }

  // salt and hash password
  const salt = generateSalt()
  const passwordHash = generateHash(password, salt)

  return db.user.create({ data: { email, password: passwordHash, salt } })
}
