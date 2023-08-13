const express = require('express')
const cors = require("cors")

const app = express()
app.use(cors())

const port = 6420

app.get('/', (req, res) => {

    res.sendFile(__dirname + "/some.html")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))