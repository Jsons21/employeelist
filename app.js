import express from "express";
import employees from "./db/employees.js";

const app = express();

export default app;

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.route("/employees").get((req, res) => {
  res.send(employees);
});

app.route("/employees/random").get((req, res) => {
  const id = Math.floor(Math.random(employees.length) * employees.length);
  res.send(employees[id]);
});

app.route("/employees/:id").get((req, res) => {
  const { id } = req.params;
  console.log(!isNaN(id));
  if (isNaN(id)) {
    return res.status(404).send("ID Needs To Be A Number");
  }

  if (id > employees.length - 1) {
    return res.status(404).send("Employee not found");
  }

  res.send(employees[id - 1]);
});
