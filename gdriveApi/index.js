const { google } = require('googleapis')

const drive = () => {
  google.options({
    auth: process.env.GDRIVE_TOKEN
  })
  return google.drive('v3')
}

const uploadFilesMultipart = async function (mediaObject, fileMetadata) {
  return new Promise((resolve, reject) => {
    const g = drive().files.create({
      media: mediaObject,
      requestBody: {
        name: fileMetadata.name,
        isAppAuthorized: true
      }
    })

    console.log(g.status)
  })
}

module.exports = {
  uploadFilesMultipart
}
