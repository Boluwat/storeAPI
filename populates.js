require('dotenv').config()

const connectDB = require('./db/db')
const Product = require('./models/products')
const jsonProduct = require('./products.json')

const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany();
        await Product.create(jsonProduct)
        console.log('sucess!!!')
        process.exit(0)
    }catch(err){
        console.log(err);
        process.exit(1)
    }
}

start()