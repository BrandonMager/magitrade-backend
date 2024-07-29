const express = require("express")
const { MongoClient } = require("mongodb")

const app = express()
const cors = require("cors")
const dotenv = require('dotenv')
const { resetTickerCollection } = require("./script")

dotenv.config()

const port = process.env.PORT || 5200
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

app.post("/", (req, res) => {

})

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

app.get('/reset', async (req, res) => {
    await resetTickerCollection(db)
    return res.status(200)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

