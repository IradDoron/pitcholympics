import { Schema, model, models } from 'mongoose';

const VoteSchema = new Schema({
    userId: {
        type: [Schema.Types.ObjectId],
        required: true,
    },
    value: {
        type: Number,
        enum: [1, -1],
        required: true,
    },
});

export const Vote = models.Vote || model('Vote', VoteSchema);
