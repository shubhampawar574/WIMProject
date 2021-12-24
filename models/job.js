const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    firmname: {
      type: String,
      required: true,
    },
    jobdescription: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },

    occupation: {
      type: String,
      required: true,
    },

    handicapped: {
      type: String,
      required: true,
    },

    hours: {
      type: Number,
      required: true,
    },

    wages: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const jobModel = mongoose.model("jobs", jobSchema);

module.exports = jobModel;
