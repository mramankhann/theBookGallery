const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error("mongoDB Connection Failed", error)
    }
};

module.exports = connectDB;
// Export the connectDB function to be used in other files