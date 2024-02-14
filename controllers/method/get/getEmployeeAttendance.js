const db = require("../../../models/db");

function getEmployeeAttendance(req, res) {
  const id = req.params.id;
  db.query(
    "SELECT * FROM Attendance WHERE employee_id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.error("Error fetching attendance records: ", err);
        res.status(500).send("Internal Server Error");
        return;
      }
      res.json(results);
    }
  );
}

module.exports = getEmployeeAttendance;
