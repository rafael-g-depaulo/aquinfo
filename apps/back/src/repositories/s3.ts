import { Readable } from "node:stream"
import { Response } from "express"
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  PutObjectCommandOutput,
} from "@aws-sdk/client-s3"

const key_id = process.env.S3_ACCESS_KEY_ID
const secret = process.env.S3_ACCESS_SECRET
const Bucket = process.env.S3_BUCKET
const region = process.env.S3_REGION

const s3 = new S3Client({
  region,
  credentials: { accessKeyId: key_id, secretAccessKey: secret },
})

interface UploadResult extends PutObjectCommandOutput {
  Key: string
  url: string
}

export async function store(name: string, Body: string | Uint8Array | Buffer) {
  const now = new Date()
  const Key = `${now.getFullYear()}-${now.getMonth()}-${now.getDay()}-${now.getTime()}-${name}`
  const command = new PutObjectCommand({
    Bucket,
    Body,
    Key,
  })
  return new Promise<PutObjectCommandOutput>((resolve, reject) =>
    s3.send(command, (err, data) => (err ? reject(err) : resolve({ ...data }))),
  ).then<UploadResult>((output) => {
    return {
      ...output,
      Key,
      url: `https://${Bucket}.s3.amazonaws.com/${encodeURI(
        Key.replace(" ", "+"),
      )}`,
    }
  })
}

export async function retrieve(res: Response, name: string) {
  const command = new GetObjectCommand({ Bucket, Key: name })
  const response = await s3.send(command)
  const body = response.Body as Readable
  body.pipe(res)
}
