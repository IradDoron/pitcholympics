import { Schema, model, models } from 'mongoose';

const PatchNoteSchema = new Schema({
    version: {
        type: String,
        unique: [true, 'Version is unique'],
        required: [true, 'Version is required'],
    },
    authorId: {
        type: String,
        required: [true, 'authorId is required'],
    },
    introSection: {
        paragraphs: {
            type: [String],
            required: [true, 'Intro paragraphs are required'],
        },
    },
    contentSections: {
        type: [
            {
                title: {
                    type: String,
                    required: true,
                },
                content: {
                    type: [
                        {
                            title: {
                                type: String,
                                required: true,
                            },
                            list: {
                                type: [String],
                            },
                        },
                    ],
                },
            },
        ],
        required: [true, 'Content sections are required'],
    },
});

export const PatchNote =
    models.PatchNote || model('PatchNote', PatchNoteSchema);
