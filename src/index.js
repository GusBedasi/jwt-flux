import express from 'express'
import mongoose from 'mongoose'

import { routes } from './routes'

const app = express()

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/jwt_flux', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.use(routes)

app.listen(3333, () => {
    console.log("Server online!")
})