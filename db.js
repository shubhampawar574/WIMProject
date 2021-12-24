const mongoose = require("mongoose");

var mongoURL = process.env.DATABASE;

mongoose.connect(mongoURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var connection = mongoose.connection;

connection.on("error", () => {
  console.log("MongoDB connection failed to connect");
});

connection.on("connected", () => {
  console.log("MongoDB connection successfully connected");
});
