import express from "express"
import bodyParser from 'body-parser'

import mongoose from "mongoose"
import UserRepository from "../repositories/User"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5200
app.use(bodyParser.json())


const URI = process.env.MONGO_URI || ""
mongoose.connect(URI)

app.listen(PORT, () => {
    console.log("Connected to port: ", PORT)
})

app.post('/api/createUser', async (req, res) => {
    const data = req.body
    try {
        const newUser = await UserRepository.createUser(data)
        res.status(201).json(newUser)
    } catch (err){
        console.log(err.message)
        res.status(400).send(err.message)
    }

})

