import { Schema, model, models } from 'mongoose';

const PatchNoteSchema = new Schema({
    patchNumber: {
        type: String,
        unique: [true, 'Patch is unique'],
        required: [true, 'PatchNumber is required'],
    },
    authorId: {
        type: String,
        unique: [true, 'authorId is unique'],
        required: [true, 'authorId is required'],
    },
    intro: {
        type: String,
        required: [true, 'intro is required'],
    },
    contentSections: {
        type: {
            featuresIntro: {
                type: String,
            },
            featuresChanges: {
                type: [String],
            },
        },
    },
    bugFixed: {
        type: {
            bugFixedIntro: {
                type: String,
            },
            bugFixedChanges: {
                type: [String],
            },
        },
    },
    Adjustments: {
        type: {
            buffs: {
                type: [String],
            },
            nerfs: {
                type: [String],
            },
            adjustment: {
                type: [String],
            },
        },
    },
});

export const PatchNote =
    models.PatchNote || model('PatchNote', PatchNoteSchema);
