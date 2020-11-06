const express=require("express");
const  mongoose  = require("mongoose");
const env = require("dotenv");
const path =require("path");
// environement variable
env.config()

const app =express();

//middleware 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/uploads',express.static(path.join(__dirname,'/uploads')))
//connectDB
    const db = process.env.MONGOURI
    mongoose.connect(db,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        }).then(()=>console.log("DB Connected"))
       

//routes
app.use("/api/users",require("./routes/user"))
app.use("/api/products",require("./routes/product"))
app.use("/api/orders",require("./routes/order"))
app.use("/api/upload",require("./routes/upload"))
//port
const PORT=process.env.PORT|| 5000;
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))