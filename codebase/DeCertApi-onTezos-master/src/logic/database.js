const mongoose = require('mongoose');
require('dotenv').config();

// Connects to mongodb database
exports.connect = async () => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                console.log('Connected to database');
                resolve();
            })
            .catch(err => {
                console.log("Database connection failed. exiting now...");
                reject(err);
            });
    })
}

exports.close = () => {
    mongoose.connection.close();
};