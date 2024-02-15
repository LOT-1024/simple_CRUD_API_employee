const express = require("express");
const router = express.Router();
const usersController = require("../controllers");

// GET
router.get(
  "/",
  usersController.login.authenticateToken,
  usersController.getAllEmployee
);
router.get(
  "/:id",
  usersController.login.authenticateToken,
  usersController.getEmployeeById
);
router.get(
  "/:id/attendance",
  usersController.login.authenticateToken,
  usersController.getEmployeeAttendance
);

// POST
router.post(
  "/",
  usersController.login.authenticateToken,
  usersController.postNewEmployee
);
router.post(
  "/:id/attendance",
  usersController.login.authenticateToken,
  usersController.postMarkAttendance
);
// #Login
router.post("/janganlogin/login", usersController.login.login);
router.post("/janganlogin/register", usersController.login.register);

// PUT
router.put(
  "/:id",
  usersController.login.authenticateToken,
  usersController.putUpdateEmployee
);
router.put(
  "/:id/attendance/:attendanceId",
  usersController.login.authenticateToken,
  usersController.putUpdateAttendance
);

// DELETE
router.delete(
  "/:id",
  usersController.login.authenticateToken,
  usersController.deleteEmployee
);
router.delete(
  "/:id/attendance/:attendanceId",
  usersController.login.authenticateToken,
  usersController.deleteEmployeeAttendance
);

module.exports = router;
