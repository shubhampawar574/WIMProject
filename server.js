const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config({ path: "./config.env" });
const dbConfig = require("./db");
const jobsRoute = require("./routes/jobsRoutes");
const usersRoute = require("./routes/usersRoute");

app.use(express.json()); //for post request to read body of parameters
app.use("/api/jobs", jobsRoute);
app.use("/api/users", usersRoute);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server running on port no. ${port} using Nodemon`)
);
