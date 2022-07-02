const express = require('express');
const connect = require('./config/database');
const { json } = require("express");
const tasks = require("./controllers/taskController");
const models = require("./models/task");
const taskRoutes = require("./router/taskRoute");

// express app
const app = express();

app.use("/task", taskRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});