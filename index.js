const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
// By default 3000 you can chane it in .env file to set the port number
const PORT = process.env.PORT||3000; 

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");

//mount the todo API routes
app.use("/api/v1", todoRoutes);

//start server
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/", (req, res) => {
  res.send(`<h1> This is Homepage Just for a Demo</h1>`);
});
