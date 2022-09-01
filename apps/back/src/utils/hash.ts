import { randomBytes, pbkdf2Sync } from "node:crypto"

export const generateSalt = () => randomBytes(16).toString("hex")

export const generateHash = (password: string, salt: string) => {
  const numberOfIterations = 1000
  const keyLength = 64
  return pbkdf2Sync(
    password,
    salt,
    numberOfIterations,
    keyLength,
    "sha512",
  ).toString("base64")
}

export const compareHash = (hash: string, password: string, salt: string) =>
  generateHash(password, salt) === hash
