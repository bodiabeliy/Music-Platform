import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FileModule } from "./files/file.module";
import { TrackModule } from "./track/track.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from 'path'

@Module({
   imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname,  'static'),
        }),
       FileModule,
       TrackModule,
       MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.uclsj.mongodb.net/music-platform?retryWrites=true&w=majority')
    ]
})
export class AppModule {}