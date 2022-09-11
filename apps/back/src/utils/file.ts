import { Request } from "express"
import { readFile } from "fs/promises"
import { store } from "../repositories/s3"

interface FileObj {
  fieldName: string
  originalFilename: string
  path: string
  headers: Headers
  size: number
  name: string
  type: string
}

interface Headers {
  "content-disposition": string
  "content-type": string
}

export const getFile = (req: Request, fileName: string): FileObj =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (req as any).files[fileName]

export const sendFileToS3 = (file: FileObj) => {
  return readFile(file.path).then((buff) => store(file.originalFilename, buff))
}
