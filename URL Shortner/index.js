const express = require('express');
const app = express();
const PORT = 8000;
app.use(express.json());

const urlRoute = require("./Routes/url");
const {connectToMongoDB} = require("./databaseConnect");


//MongoDB connection
connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
.then(()=>{
    console.log("MongoDB connected.");
});

app.use("/url",urlRoute);
app.use("/",urlRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`);
});