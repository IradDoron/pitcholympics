
import mongoose, { Schema, model, models } from 'mongoose';

const CommentSchema = new Schema({
    content: {
        type: String,
        required: [true, 'Content is required!'],
    },
    authorId: { type: String, required: [true, 'AuthorId is required!'] },
    date: { type: Date, default: Date.now },
    reactions: {
        type: {
            like: {
                type: [String],
                default: [],
            },
            dislike: {
                type: [String],
                default: [],
            },
            love: {
                type: [String],
                default: [],
            },
            haha: {
                type: [String],
                default: [],
            },
            wow: {
                type: [String],
                default: [],
            },
            sad: {
                type: [String],
                default: [],
            },
            angry: {
                type: [String],
                default: [],
            },
        },
        default: {
            like: [],
            dislike: [],
            love: [],
            haha: [],
            wow: [],
            sad: [],
            angry: [],
        },
    },
    comments: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
        ref: 'Comment',
    },
});

const Comment = models.Comment || model('Comment', CommentSchema);
export default Comment;
