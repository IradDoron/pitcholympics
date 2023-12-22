// send to dataBase

import { Schema, model, models } from 'mongoose';

const PostSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required!'],
        },
        description: {
            type: String,
        },
        topic: {
            type: String,
            required: [true, 'Topic is required!'],
        },
        tags: {
            type: [String],
        },
        reactions: {
            type: String,
            enum: [
                null,
                'like',
                'dislike',
                'love',
                'haha',
                'wow',
                'sad',
                'angry',
            ],
            default: null,
        },

        content: {
            type: String,
            required: [true, 'Content is required!'],
        },
        comments: {
            type: {
                content: {
                    type: String,
                    required: [true, 'Content is required!'],
                },
                authorId: {
                    type: String,
                    required: [true, 'Author is required!'],
                },
                date: {
                    type: Date,
                    default: Date.now,
                },
                reactions: {
                    type: String,
                    enum: [
                        null,
                        'like',
                        'dislike',
                        'love',
                        'haha',
                        'wow',
                        'sad',
                        'angry',
                    ],
                    default: null,
                },
                comments: {
                    type: [String],
                },
            },
        },
    },
    //   author: {
    //     type: String,
    //     required: [true, 'Author is required!'],
    // },
    // image: {
    //     type: String,
    // },
);
const Post = model('Post', PostSchema);
console.log(Post);
console.log(models.Post);
export default Post;
/* authorId: string;
title: string;
content: string;
category: string;
reactions: Reactions;
comments: SuggestionPostComment[]; */

/*  title: '',
        content: '',
        category: '',
        comments: [],
        authorId: '',
        reactions: null, */
