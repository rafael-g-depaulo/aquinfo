import { Readable } from "node:stream"
import { Response } from "express"
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3"

const key_id = process.env.S3_ACCESS_KEY_ID
const secret = process.env.S3_ACCESS_SECRET
const Bucket = process.env.S3_BUCKET
const region = process.env.S3_REGION

const s3 = new S3Client({
  region,
  credentials: { accessKeyId: key_id, secretAccessKey: secret },
})

export async function store(name: string, Body: string | Uint8Array | Buffer) {
  const command = new PutObjectCommand({ Bucket, Body, Key: name })
  await s3.send(command)
}

export async function retrieve(res: Response, name: string) {
  const command = new GetObjectCommand({ Bucket, Key: name })
  const response = await s3.send(command)
  const body = response.Body as Readable
  body.pipe(res)
}
