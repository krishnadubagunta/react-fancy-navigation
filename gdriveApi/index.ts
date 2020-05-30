import { google } from "googleapis"
import fs from "fs";

export interface FileMetadata {
  name: string,
}

export interface MediaMimeType {
  mimeType?: string,
  body: fs.WriteStream
}

const drive = google.drive({
  version: 'v3',
  auth: process.env.GDRIVE_TOKEN
})

export const uploadFilesMultipart = (mediaObject: MediaMimeType, { name }: FileMetadata) => {
  return new Promise((resolve, reject) => {
    drive.files.create({
      media: mediaObject,
      key: process.env.GDRIVE_TOKEN,
      fields: 'id',
      requestBody: {
        name
      },
    }, (error, file) => {
        if(!!error) {
          reject(error)
        }
        resolve(file)
    })
  })
}
