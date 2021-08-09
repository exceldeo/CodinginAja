const express = require("express");
const bodyParser = require('body-parser');
const ClassRouter = require("./routes/class");
const CategoryRouter = require("./routes/category");
const MaterialRouter = require("./routes/material");
const SubMaterialRouter = require("./routes/submaterial");
const config = require('./config');
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api/class", ClassRouter);
app.use("/api/category", CategoryRouter);
app.use("/api/material", MaterialRouter);
app.use("/api/submaterial", SubMaterialRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});

  return;
});

app.listen(3000, () => console.log("Server is running at http://localhost:3000"));