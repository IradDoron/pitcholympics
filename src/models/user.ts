import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [
            /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
            'Username invalid, it should contain 8-20 alphanumeric letters and be unique!',
        ],
    },
    image: {
        type: String,
    },
    gender: {
        type: String,
    },
    locale: {
        type: String,
    },
    timezone: {
        type: String,
    },
    gameProgress: {
        memoTheMelo: {
            type: Map,
            default: {
                '1_1': 'locked',
            },
        },

        pitchCatch: {
            type: Map,
            default: {
                '1_1': 'locked',
            },
        },
    },
    xp: {
        type: Number,
    },
    userLevel: {
        type: Number,
    },
    attributes: {
        type: {
            musicalMemory: {
                type: Number,
            },
            pitchRecognition: {
                type: Number,
            },
        },
    },
    resources: {
        type: {
            coins: {
                type: Number,
            },
            musicalTreasures: {
                type: Number,
            },
            gems: {
                type: Number,
            },
            health: {
                type: Number,
            },
        },
    },
    GameAnalytics: [
        {
            type: {
                gameName: {
                    type: String,
                    enum: ['memoTheMelo', 'pitchCatch'],
                },
                level: {
                    type: Number,
                },
                stage: {
                    type: Number,
                },
                status: {
                    type: String,
                    enum: ['passed', 'failed'],
                },
                time: {
                    type: Number,
                },
                startDate: {
                    type: Date,
                },
            },
        },
    ],
    Achievements: {
        type: {
            1: {
                criteriaStatus: [
                    {
                        type: Boolean,
                    },
                ],
                completeAmount: {
                    type: Number,
                },
            },
        },
    },
    gameItems: {
        type: {
            1: {
                quantity: {
                    type: Number,
                },
            },
        },
    },
});

const User = models.User || model('User', UserSchema);

export default User;
