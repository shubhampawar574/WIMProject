const express = require("express");
const router = express.Router();

const Job = require("../models/job");

// Admin panel add employee
router.post("/addjob", async (req, res) => {
  try {
    const newjob = new Job(req.body);
    await newjob.save();
    res.send("New job added successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.get("/getalljobs", async (req, res) => {
  try {
    const jobs = await Job.find({});
    // return res.json({ rooms });      //return object-rooms of array
    res.send(jobs);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

module.exports = router;
