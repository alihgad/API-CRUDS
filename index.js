import express from 'express'
import router from './items/items.routes.js'
import cors from 'cors'
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

const app = express()
const port = 3000 || process.env.PORT

app.use(cors(corsOptions))
app.use(express.json())
app.use('/items',router)



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))