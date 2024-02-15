//  GET
const getAllEmployee = require("./method/get/getAllEmployee");
const getEmployeeAttendance = require("./method/get/getEmployeeAttendance");
const getEmployeeById = require("./method/get/getEmployeeById");

//  POST
const postNewEmployee = require("./method/post/postNewEmployee");
const postMarkAttendance = require("./method/post/postMarkAttendance");
// #Login
const login = require("./features/login");

// PUT
const putUpdateEmployee = require("./method/put/putUpdateEmployee");
const putUpdateAttendance = require("./method/put/putUpdateAttendance");

// DELETE
const deleteEmployee = require("./method/delete/deleteEmployee");
const deleteEmployeeAttendance = require("./method/delete/deleteEmployeeAttendance");

module.exports = {
  getAllEmployee,
  getEmployeeById,
  postNewEmployee,
  putUpdateEmployee,
  deleteEmployee,
  getEmployeeAttendance,
  postMarkAttendance,
  putUpdateAttendance,
  deleteEmployeeAttendance,
  login,
};
