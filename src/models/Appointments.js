const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String, required: true },
    purpose: { type: String, required: true },
    attendee: { type: String, required: true },
    company: { type: String, required: true },
    address: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    comment: { type: String, required: true },
  },
  { collection: "appointments" }
);

module.exports = mongoose.model("Appointments", AppointmentSchema);
