const { google } = require('googleapis')

const drive = google.drive({
  version: 'v3',
  auth: process.env.GDRIVE_TOKEN
})

const uploadFilesMultipart = function (mediaObject, fileReference) {
  console.log(drive.about)
  console.log(process.env.GDRIVE_TOKEN)
  return new Promise((resolve, reject) => {
    drive.files.create({
      media: mediaObject,
      key: process.env.GDRIVE_TOKEN,
      fields: 'id',
      requestBody: {
        name: fileReference.name
      }
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
