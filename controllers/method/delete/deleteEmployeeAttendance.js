const db = require("../../../models/db");

function deleteEmployeeAttendance(req, res) {
  const id = req.params.id;
  const attendanceId = req.params.attendanceId;
  db.query(
    "DELETE FROM Attendance WHERE id = ? AND employee_id = ?",
    [attendanceId, id],
    (err, result) => {
      if (err) {
        console.error("Error deleting attendance record: ", err);
        res.status(500).send("Internal Server Error");
        return;
      }
      res.status(204).send("Attendance record deleted successfully");
    }
  );
}

module.exports = deleteEmployeeAttendance;
