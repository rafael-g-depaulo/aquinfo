import { PrismaClient } from "@db"
import { randomBytes, pbkdf2Sync } from "node:crypto"

interface UserInfo {
  email: string
  password: string
}
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

const generateSalt = () => randomBytes(16).toString("hex")

export const createUser = async (
  { email, password }: UserInfo,
  db: PrismaClient,
) => {
  console.log(emailRegex, email, emailRegex.test(email))
  if (!emailRegex.test(email)) throw { err: "invalid email format" }
  if (!email || !password) throw { err: "incomplete user credentials" }

  // salt and hash password
  const salt = generateSalt()
  const numberOfIterations = 1000
  const keyLength = 64
  const passwordHash = pbkdf2Sync(
    password,
    salt,
    numberOfIterations,
    keyLength,
    "sha512",
  ).toString("base64")

  return db.user.create({ data: { email, password: passwordHash, salt } })
}
