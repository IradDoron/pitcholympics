import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        // eslint-disable-next-line no-console
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            dbName: 'pitch_olympics',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = true;

        // eslint-disable-next-line no-console
        console.log('MongoDB connected');
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
};
