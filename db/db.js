const mongoose = require('mongoose')

const connectDB = (url) => {
    mongoose.connect(url, {
        useNewUrlParser: true
    }).then(() => console.log('connected to database...')).catch((err) => 
        console.log(err))
}


module.exports = connectDB