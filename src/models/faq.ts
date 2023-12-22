import Vote from '@/models/vote';
import { Schema, model, models } from 'mongoose';

const FAQSchema = new Schema({
    votes: [Vote],
    question: {
        type: {
            en: {
                type: String,
                required: [true, 'English question is required!'],
            },
            he: {
                type: String,
                required: [true, 'Hebrew question is required!'],
            },
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
