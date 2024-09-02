import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${encodeURIComponent(password)}@cluster0.tflws.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    try {
        await mongoose.connect(URL);
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error: ', error.message);
    }
};

export default Connection;
