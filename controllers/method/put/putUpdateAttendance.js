const db = require("../../../models/db");

function putUpdateAttendance(req, res) {
  const id = req.params.id;
  const attendanceId = req.params.attendanceId;
  const { date, status } = req.body;
  db.query(
    "UPDATE Attendance SET date = ?, status = ? WHERE id = ? AND employee_id = ?",
    [date, status, attendanceId, id],
    (err, result) => {
      if (err) {
        console.error("Error updating attendance: ", err);
        res.status(500).send("Internal Server Error");
        return;
      }
      res.status(200).send("Attendance updated successfully");
    }
  );
}

module.exports = putUpdateAttendance;
