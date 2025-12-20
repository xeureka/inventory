import express from "express"
import cors from "cors"
import connectdb from "./config/db"

const app = express()

app.use(express.json())
app.use(cors())

// routes
app.get("/health",(req:express.Request,res:express.Response) => {
    try {
        return res.status(201).json({message: "Every things works fine here"})
    } catch (error) {
        console.log(error)
        return res.status(500).json('Server not working')
    }
})

const PORT = process.env.PORT || 3000

app.listen(PORT, async ()=> {
    await connectdb();
    console.log(`server running on port ${PORT}`)
})
