const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const employeesModel = require("./employees");
const cors = require("cors");

const employees = employeesModel.EmployeeInfo;
app.use(cors());
// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cloudinary configuration

app.get("/employees", (request, response) => {
  response.json(employeesModel.EmployeeInfo)
});

module.exports = app;
