const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/socialnetworkapi')
        console.log('mongoDB connected!');
    } catch {
        console.error('did not connect');
    }

}

module.exports = connectDB