const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    ename: {
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

    employeetype: {
      type: String,
      required: true,
    },

    handicapped: {
      type: String,
      required: true,
    },

    hoursperday: {
      type: Number,
      required: true,
    },

    salaryperday: {
      type: Number,
      required: true,
    },

    aadhaarnumber: {
      type: Number,
      required: true,
    },

    phonenumber: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
