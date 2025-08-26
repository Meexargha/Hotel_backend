const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  role: {
    type: String,
    enum: [
      "Chef",
      "Waiter",
      "Manager",
      "Worker",
      "Receptionist",
      "Ceo",
      "Chairman",
    ],
    required: true,
  },
  department: {
    type: String,
    enum: ["Kitchen", "Service", "Front Desk", "Administration", "Management"],
    required: true,
  },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
});

module.exports = mongoose.model("Person", personSchema);
