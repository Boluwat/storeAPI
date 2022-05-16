const express = require('express');
const app = express()
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/errorhandler')
const connectDB = require('./db/db')
const productsRouter = require('./routes/products')

require('dotenv').config()

const port = process.env.PORT || 3020

//middleware
app.use(express.json())

app.use('/api/v1/products', productsRouter)

app.use(notFoundMiddleware)
app.use(errorMiddleware)


const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening at ${port}`))
    }catch(err){
        console.log(err)
    }
}

start()
