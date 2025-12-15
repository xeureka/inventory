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

// what are the tables did I need for this porject then
// 
// TABLES NEEDED
// product (name,sku,price,entry date)
// catagory (product, name)
// for the user things gonna add it alter on at the members only time
// the thing I wnat you to read at this point is why w need to use they document embedding and also the normalization thing