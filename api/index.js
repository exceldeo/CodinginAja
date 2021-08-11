const express = require("express");
const bodyParser = require('body-parser');
const CourseRouter = require("./routes/course");
const CategoryRouter = require("./routes/category");
const MaterialRouter = require("./routes/material");
const SubMaterialRouter = require("./routes/submaterial");
const config = require('./config');
const { sequelize } = require('./models')
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api/course", CourseRouter);
app.use("/api/category", CategoryRouter);
app.use("/api/material", MaterialRouter);
app.use("/api/submaterial", SubMaterialRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});

  return;
});

app.listen({ port: 3000 }, async () => {
  console.log('Server up on http://localhost:3000')
  await sequelize.authenticate()
  console.log('Database Connected!')
})