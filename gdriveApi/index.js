const { google } = require('googleapis')

const drive = google.drive({
  version: 'v3',
  auth: process.env.GDRIVE_TOKEN
})

const uploadFilesMultipart = function (mediaObject, fileMetadata) {
  console.error(drive.permissions)
  return new Promise((resolve, reject) => {
    drive.files.create({
      media: mediaObject,
      key: process.env.GDRIVE_TOKEN,
      resource: fileMetadata,
      uploadType: 'media',
      fields: 'id'
    }, (error, file) => {
      if (error) {
        reject(error)
      }
      resolve(file)
    })
  })
}

module.exports = {
  uploadFilesMultipart
}
