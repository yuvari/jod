const express =require("express");
const app = express();
const mongoose =require("mongoose");
const cors =require("cors");
const dotenv =require("dotenv");
const userRoute =require("./routes/user");
const productRoute = require("./routes/product");

dotenv.config();


mongoose
.connect(process.env.MONGO_URL)
.then(()=>console.log("DBConnection successfull!"))
.catch((err)=>{
    console.log(err);
});
app.use(express.json());
app.use(cors());
app.use("/api/product",productRoute);
app.use("/api/users",userRoute);

app.listen( process.env.PORT || 5000,()=>{
    console.log("Backend server is running!");
});