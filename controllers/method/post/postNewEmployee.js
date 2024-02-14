const db = require("../../../models/db");

function postNewEmployee(req, res) {
  const { name, department, email } = req.body;
  db.query(
    "INSERT INTO Employees (name, department, email) VALUES (?, ?, ?)",
    [name, department, email],
    (err, result) => {
      if (err) {
        console.error("Error adding employee: ", err);
        res.status(500).send("Internal Server Error");
        return;
      }
      res.status(201).send("Employee added successfully");
    }
  );
}

module.exports = postNewEmployee;
