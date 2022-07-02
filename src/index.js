const express = require('express');
const connect = require('./config/database');
const tasks = require("./controllers/taskController");
const models = require("./models/task");
const taskRoutes = require("./router/taskRoute");

connect()

// express app
const app = express();

app.use("/task", taskRoutes);

app.get('/', (req, res) => {
  res.send('MongoDB')
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});