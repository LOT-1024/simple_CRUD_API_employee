const db = require("../../../models/db");

function deleteEmployee(req, res) {
  const id = req.params.id;
  db.query("DELETE FROM Employees WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error("Error deleting employee: ", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.status(204).send("Employee deleted successfully");
  });
}

module.exports = deleteEmployee;
