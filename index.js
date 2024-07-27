const express = require("express")
const { MongoClient } = require("mongodb")

const app = express()
const cors = require("cors")
const dotenv = require('dotenv')

dotenv.config()

const port = process.env.PORT || 3000
app.use(cors())
app.use(express.json())

const client = new MongoClient(proces.env.MONGO_URI)

client.connect(err => {
    if(err) {
        console.error("Unable to connect to the MongoDB URI: ", err)
        process.exit(1)
    }

})

