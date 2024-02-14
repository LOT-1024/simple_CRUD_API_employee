const express = require("express");
const router = express.Router();
const usersController = require("../controllers");

// GET
router.get("/", usersController.getAllEmployee);
router.get("/:id", usersController.getEmployeeById);
router.get("/:id/attendance", usersController.getEmployeeAttendance);

// POST
router.post("/", usersController.postNewEmployee);
router.post("/:id/attendance", usersController.postMarkAttendance);

// PUT
router.put("/:id", usersController.putUpdateEmployee);
router.put(
  "/:id/attendance/:attendanceId",
  usersController.putUpdateAttendance
);

// DELETE
router.delete("/:id", usersController.deleteEmployee);
router.delete(
  "/:id/attendance/:attendanceId",
  usersController.deleteEmployeeAttendance
);

module.exports = router;
