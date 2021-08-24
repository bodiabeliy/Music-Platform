import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { FileService, FileType } from "src/files/file.service";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { CreateTrackDto } from "./dto/create-track.dto";
import { Comment, CommentDocument } from "./schemas/comment.schema";
import { Track, TrackDocument } from "./schemas/track.schema";

@Injectable()

export class TrackService {

    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>, 
                @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
                private fileService: FileService
    ) {}
    // for creating tracks
    async Create(dto: CreateTrackDto, picture, audio): Promise<Track> {
        const audioPath = this.fileService.createFile(FileType.AUDIO, audio)
        const picturePath = this.fileService.createFile(FileType.PICTURE, picture)

        const track = await this.trackModel.create({...dto, listens: 0, audio: audioPath, picture: picturePath})
        return track
    }
    // get collection of all tracksfrom database
    async GetAll(counter = 10, offset = 0) :Promise<Track[]> {
    // get all notes on DB
        const tracks = await this.trackModel.find().skip(Number (offset)).limit(Number(counter))
        return tracks
    }
    // get one tracks for shows detalaize info
    async GetOne(id: ObjectId): Promise<Track> {
    // populate() - open array of comments with all data (name, text)
        const onetrack= await this.trackModel.findById(id).populate('comments')
        return onetrack

    }
    // delete tracks
    async Delete(id: ObjectId): Promise<Track> {
        const deletetrack = await (await this.trackModel.findById(id)).delete()
        return deletetrack
    }
    // add comment for track
    async addComment(dto: CreateCommentDto): Promise<Comment> {
        const track = await this.trackModel.findById(dto.trackId)
        const comment = await this.commentModel.create({...dto})
        track.comments.push(comment._id)
        await track.save()
        return comment
    }
    async listen(id: ObjectId) {
        const trackId = await this.trackModel.findById(id)
        trackId.listens +=1
        trackId.save()
    }
    async search( search: string): Promise<Track[]> {
        const searchTracks = await this.trackModel.find( {
            // $regex - provides regular expression in queries (MongoDB)
            name:{$regex: new RegExp(search, 'i')}
        })
        return searchTracks
    }
}