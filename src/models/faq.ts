import { Schema, model, models } from 'mongoose';

const FAQSchema = new Schema({
    votes: {
        type: Map,
        default: {},
    },
    originalQuestion: {
        type: String,
        required: [true, 'Original question is required!'],
    },
    question: {
        type: {
            en: { type: String },
            he: { type: String },
        },
    },
    answer: {
        type: {
            en: { type: String },
            he: { type: String },
        },
    },
});

const FAQ = models.FAQ || model('FAQ', FAQSchema);

export default FAQ;
