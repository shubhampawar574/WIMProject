const express = require("express");
const router = express.Router();

const Employee = require("../models/user");

// Admin panel add employee
router.post("/adduser", async (req, res) => {
  try {
    const newemployee = new Employee(req.body);
    await newemployee.save();
    res.send("New user added successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.get("/getallusers", async (req, res) => {
  try {
    const employees = await Employee.find({});
    // return res.json({ rooms });      //return object-rooms of array
    res.send(employees);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

module.exports = router;
