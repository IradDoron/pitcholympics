// send to dataBase

import { Schema, model, models } from 'mongoose';

const PostSchema = new Schema({
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
    content: {
        type: String,
        required: [true, 'Content is required!'],
    },
    //   author: {
    //     type: String,
    //     required: [true, 'Author is required!'],
    // },
    // image: {
    //     type: String,
    // },
});
const Post =  model('Post', PostSchema);
console.log(Post);
console.log(models.Post);
export default Post;
