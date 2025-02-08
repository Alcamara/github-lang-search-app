import express, { Application } from 'express';
import cors from 'cors'
import searchRouter from '../server/routes/search.router'
import dotenv from 'dotenv';
dotenv.config()

const PORT = process.env.PORT || 3000
const app: Application = express()

app.use(cors())
app.use(express.json())

app.use("/search", searchRouter)

app.listen(PORT, () => {
    console.log(`listening on Port ${PORT}`)
})


