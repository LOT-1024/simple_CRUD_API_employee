const db = require("../../../models/db");

function postMarkAttendance(req, res) {
  const id = req.params.id;
  const { date, status } = req.body;
  db.query(
    "INSERT INTO Attendance (employee_id, date, status) VALUES (?, ?, ?)",
    [id, date, status],
    (err, result) => {
      if (err) {
        console.error("Error marking attendance: ", err);
        res.status(500).send("Internal Server Error");
        return;
      }
      res.status(201).send("Attendance marked successfully");
    }
  );
}

module.exports = postMarkAttendance;
