import express from 'express'
import router from './items/items.routes.js'
var cors = require('cors')
const app = express()
const port = 3000 || process.env.PORT

app.use(cors())
app.use(express.json())
app.use('/items',router)



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))