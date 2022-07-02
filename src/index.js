const express = require('express');
const { json } = require("express");
// const connect = require('./config/database');
const taskRoute = require('./router/taskRoute');

// connect();

// express app
const app = express();
app.use(json());
app.use("/task", taskRoute);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('MongoDB')
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});