const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blogs",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database connection successful!");
}).catch(()=>{
    console.log('Database connection failed!');
})