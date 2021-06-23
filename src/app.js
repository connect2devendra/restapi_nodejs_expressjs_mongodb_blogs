const express = require("express");
const app = express();
require('dotenv').config();
const conn = require("./db/conn");
const userRoute = require("./routes/userRoute");
const articleRoute = require("./routes/articleRoute");

app.use(express.json());

//Define Routes
app.use("/users", userRoute);
app.use("/articles", articleRoute);


//Running server on port
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});