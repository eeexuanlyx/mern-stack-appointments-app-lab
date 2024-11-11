const express = require("express");
const {
  addNewAppointment,
  getAllAppointments,
  deleteOneAppointmentById,
  getOneAppointmentById,
  updateOneAppointment,
} = require("../controllers/appointments");
const {
  validateIdInBody,
  validateIdInParam,
} = require("../validators/appointments");
const checkErrors = require("../validators/checkErrors");
const router = express.Router();

router.get("/appointments", getAllAppointments);
router.put("/appointments", addNewAppointment);
router.delete("/appointments/:id", deleteOneAppointmentById);
router.post(
  "/appointments",
  validateIdInBody,
  checkErrors,
  getOneAppointmentById
);
router.patch("/appointments/:id", validateIdInParam, updateOneAppointment);

module.exports = router;
