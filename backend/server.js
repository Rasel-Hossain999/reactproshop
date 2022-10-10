// const path = require('path')
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import bodyParser from 'body-parser'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { authUser } from './controllers/userController.js'




// {path: path.join(__dirname, '..', '.env')}
dotenv.config()

connectDB()

const app = express()
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is runnign..')
})

app.use('/api/products', productRoutes )
app.use('/api/users', userRoutes)
// app.post('/api/users/login', bodyParser.json(), authUser)


app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))