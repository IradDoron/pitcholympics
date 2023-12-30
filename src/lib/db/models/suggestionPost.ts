// send to dataBase

import mongoose, { Schema, model, models } from 'mongoose';

const SuggestionPostSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
    },
    content: {
        type: String,
    },
    category: {
        type: String,
        required: [true, 'Category is required!'],
    },
    tags: {
        type: [String],
    },
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
    authorId: {
        type: String,
        required: [true, 'Author is required!'],
    },
});

export const SuggestionPost =
    models.SuggestionPost || model('SuggestionPost', SuggestionPostSchema);
