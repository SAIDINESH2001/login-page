const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to Mongo DB`);
        
    }
    catch(err) {
        console.log(`Connection to DB failed`,err);
        
    }
}

module.exports = dbConnection;