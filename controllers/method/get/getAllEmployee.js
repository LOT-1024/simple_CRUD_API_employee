const db = require("../../../models/db");

function getAllEmployee(req, res) {
  db.query("SELECT * FROM Employees", (err, results) => {
    if (err) {
      console.error("Error fetching employees: ", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.json(results);
  });
}

module.exports = getAllEmployee;
