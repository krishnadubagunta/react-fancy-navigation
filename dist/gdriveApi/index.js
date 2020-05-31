import { google } from "googleapis";
const drive = google.drive({
    version: 'v3',
    auth: process.env.GDRIVE_TOKEN
});
export const uploadFilesMultipart = (mediaObject, { name }) => {
    return new Promise((resolve, reject) => {
        drive.files.create({
            media: mediaObject,
            key: process.env.GDRIVE_TOKEN,
            fields: 'id',
            requestBody: {
                name
            },
        }, (error, file) => {
            if (!!error) {
                reject(error);
            }
            resolve(file);
        });
    });
};
//# sourceMappingURL=index.js.map