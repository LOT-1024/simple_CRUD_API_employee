const db = require("../../../models/db");

function putUpdateEmployee(req, res) {
  const id = req.params.id;
  const { name, department, email } = req.body;
  db.query(
    "UPDATE Employees SET name = ?, department = ?, email = ? WHERE id = ?",
    [name, department, email, id],
    (err, result) => {
      if (err) {
        console.error("Error updating employee: ", err);
        res.status(500).send("Internal Server Error");
        return;
      }
      res.status(200).send("Employee updated successfully");
    }
  );
}

module.exports = putUpdateEmployee;
