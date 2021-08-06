const express = require("express");
const bodyParser = require('body-parser');
const tasksRouter = require("./routes/tasks");
const config = require('./config');
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api/tasks", tasksRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});

  return;
});

app.listen(3000, () => console.log("Server is running at http://localhost:3000"));