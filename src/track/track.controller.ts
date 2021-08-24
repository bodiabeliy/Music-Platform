import { Body, Controller, Get, Param, Post, Delete, UseInterceptors,UploadedFiles, Query } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { CreateTrackDto } from "./dto/create-track.dto";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { TrackService } from "./track.service";
import {FileFieldsInterceptor} from '@nestjs/platform-express'

@Controller('/tracks')
export class TrackController {

    constructor(private trackService: TrackService) {}

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
        { name: 'audio', maxCount: 1 },
      ]))
    Create(@UploadedFiles() files, @Body() dto: CreateTrackDto) {
        console.log(files);
        const {picture, audio} = files
        return this.trackService.Create(dto, picture[0], audio[0])
    }

    @Get()
    // get count of range of all tracks (pagination)
    GetAll(@Query('counter') counter: number,
            @Query('offset') offset: number) {
        return this.trackService.GetAll(counter, offset)
    }

    @Get('/search')
    // get count of range of all tracks (pagination)
    Search(@Query('query') searching: string) {
        return this.trackService.search(searching)
    }

    @Get(':id')
    GetOne(@Param('id') id: ObjectId) {
        return this.trackService.GetOne(id)
    }

    @Delete(':id')
    Delete(@Param('id') id: ObjectId) {
        return this.trackService.Delete(id)
    }

    @Post('/comment') 
    addComment(@Body() dto: CreateCommentDto) {
        return this.trackService.addComment(dto)
    }
    @Post ('/listen/:id')
    CommentCounter (@Param('id') id: ObjectId) {
        return this.trackService.listen(id)
    }
}