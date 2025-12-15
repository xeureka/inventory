import express from "express"
import cors from "cors"
import connectdb from "./config/db"

const app = express()

app.use(express.json())
app.use(cors())

await connectdb()

app.listen(3000,() => {
  console.log(`server running on port 3000`)
})