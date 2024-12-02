const mongoose = require('mongoose');

let connection = null;

const connectDB = async () => {
    if (connection) {
        console.log('Using existing database connection');
        return connection;
    }

    try {
        connection = await mongoose.connect(
            'mongodb+srv://vvk7899:8J2ReEBLMxUIZXVq@bigdelivery.jaqys.mongodb.net/?retryWrites=true&w=majority&appName=BigDelivery', 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                appName: 'BigDelivery' // Pass appName separately
            }
        );
        console.log('Database connected');
        return connection;
    } catch (error) {
        console.error('Database connection error:', error.message);
        throw error;
    }
};

module.exports = connectDB;
