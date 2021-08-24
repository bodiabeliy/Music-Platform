import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as path from 'path'
import * as fs from 'fs'
import * as uuid from 'uuid'

// something stamp for each type of files
export enum FileType {
    PICTURE = 'picture',
    AUDIO = 'audio'
}

@Injectable()
export class FileService {
    // create file on disk
    createFile(type:FileType, file) {
    // possible error
        try {
        // create file
            const fileExtenstion = file.originalname.split('.').pop()
            const fileName = uuid.v4() + '.' + fileExtenstion   
        // generate path to local files
            const filePath = path.resolve(__dirname, '..', 'static', type)
        // checking exist folder for saving file
            if(!fs.existsSync(filePath)) {

            // mkdirSync() - dinamic creation path
                fs.mkdirSync(filePath, {recursive: true})
            }
            fs.writeFileSync(path.resolve(filePath, fileName), file.buffer)
            return type + '/' +fileName

        } catch(error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }

    //remove file from disk
    removeFile(type, file) {

    }
}