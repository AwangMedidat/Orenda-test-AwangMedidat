const express = require('express')
const cors = require('cors')
const port  = process.env.PORT || 8080

const app = express()

let corOptions = {
    origin: 'https://localhost:8001'
}

app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({ message: 'hello from api' })
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

