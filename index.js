const connectDB = require('./db');

module.exports = {
    connectDB,
    User: require('./models/user'),
   
};
