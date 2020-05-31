/// <reference types="node" />
import fs from "fs";
export interface FileMetadata {
    name: string;
}
export interface MediaMimeType {
    mimeType?: string;
    body: fs.WriteStream;
}
export declare const uploadFilesMultipart: (mediaObject: MediaMimeType, { name }: FileMetadata) => Promise<unknown>;
