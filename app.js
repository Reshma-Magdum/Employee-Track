const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

// In-memory array to store employee data
let employees = [];

// Set EJS as view engine
app.set("view engine", "ejs");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// GET: Form Page
app.get("/", (req, res) => {
  res.render("index");
});

// POST: Handle new employee submission
app.post("/add-employee", (req, res) => {
  const { name, age, department, designation, salary, location } = req.body;

  if (name && age && department && designation && salary && location) {
    employees.push({ name, age, department, designation, salary, location });
  }

  res.redirect("/employees");
});

// GET: Display employee records
app.get("/employees", (req, res) => {
  res.render("employees", { employees });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
