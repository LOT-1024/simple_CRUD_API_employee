const db = require("../../../models/db");

function getEmployeeById(req, res) {
  const id = req.params.id;
  db.query("SELECT * FROM Employees WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error("Error fetching employee: ", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    if (results.length === 0) {
      res.status(404).send("Employee not found");
      return;
    }
    res.json(results[0]);
  });
}

module.exports = getEmployeeById;
