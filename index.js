const express = require("express")
const { MongoClient } = require("mongodb")

const app = express()
const cors = require("cors")
const dotenv = require('dotenv')

dotenv.config()

const port = process.env.PORT || 5100
app.use(cors())
app.use(express.json())

const client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology: true
})

client.connect(err => {
    if(err) {
        console.error("Unable to connect to the MongoDB URI: ", err)
        process.exit(1)
    }
})

const db = client.db("findata")

app.get('/user/:userId', async (req, res) => {
    const { userId} = req.params
    const item =  await db.collection('Users').findOne({
        userId: userId
    })

    if(!item) {
        return res.status(404).send("Could not find user")
    }

    return res.json(item)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

