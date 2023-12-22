import { Schema, model, models } from 'mongoose';

const VoteSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    value: {
        type: Number,
        enum: [1, -1],
        required: true,
    },
});

const Vote = models.Vote || model('Vote', VoteSchema);

export default Vote;
