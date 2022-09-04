import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3"
import { Response } from "express"

const key_id = process.env.S3_ACCESS_KEY_ID
const secret = process.env.S3_ACCESS_SECRET
const bucket = process.env.S3_BUCKET
const region = process.env.S3_REGION

const s3 = new S3Client({
  region,
  credentials: { accessKeyId: key_id, secretAccessKey: secret },
})

export async function store(name: string, body: string | Uint8Array | Buffer) {
  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: name,
    Body: body,
  })

  await s3.send(command)
}

export async function retrieve(name: string, res: Response) {
  const command = new GetObjectCommand({
    Bucket: bucket,
    Key: name,
  })

  const response = await s3.send(command)
  response.Body.pipe(res)
}
