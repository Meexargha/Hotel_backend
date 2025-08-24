const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

// Add new staff
router.post("/", async (req, res) => {
  try {
    const person = new Person(req.body);
    await person.save();
    res.json(person);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all staff
router.get("/", async (req, res) => {
  try {
    const people = await Person.find();
    res.json(people);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get single staff by ID
router.get("/:id", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id); // use model
    if (!person) return res.status(404).json({ error: "Person not found" });
    res.json(person);
  } catch (err) {
    // Proper error handling
    res.status(400).json({ error: "Invalid ID or server error" });
    console.error(err);
  }
});
//update person with id
router.put("/:id", async (req, res) => {
  try {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!person) return res.status(404).json({ error: "Person not found" });
    res.json(person);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//delete user
router.delete("/:id", async (req, res) => {
  try {
    const person = await Person.findByIdAndDelete(req.params.id);
    if (!person) return res.status(404).json({ error: "person not  found" });
    res.json({ message: "person deleted sccessfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
