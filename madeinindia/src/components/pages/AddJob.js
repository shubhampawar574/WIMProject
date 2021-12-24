import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function AddJob() {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const [firmname, setfirmname] = useState("");
  const [gender, setgender] = useState();
  const [age, setage] = useState();
  // const [phonenumber, setphonenumber] = useState();
  // const [aadhaarnumber, setaadhaarnumber] = useState();
  const [occupation, setoccupation] = useState();
  const [handicapped, sethandicapped] = useState();
  const [hours, sethours] = useState();
  // const [email, setemail] = useState();
  const [jobdescription, setjobdescription] = useState();
  const [wages, setwages] = useState();
  // const [imageurl1, setimageurl1] = useState();

  async function addjob() {
    const newjob = {
      // aadhaarnumber,
      firmname,
      handicapped,
      hours,
      // email,
      jobdescription,
      wages,
      // phonenumber,
      // imageurl1,
      age,
      occupation,
      gender,
    };
    try {
      setloading(true);
      const result = await (await axios.post("api/jobs/addjob", newjob)).data;
      console.log(result);
      setloading(false);
      Swal.fire("Congratulations", "Job added successfully", "success").then(
        (result) => {
          window.location.href = "/jobs";
        }
      );
    } catch (error) {
      console.log(error);
      Swal.fire("Oops", "Something went wrong", "error");
    }
  }
  return (
    <div className="page-heading">
      <h1>AddJob</h1>
      <div className="row mb-4 w-100">
        <div className="col-md-6">
          {/* {loading && <Loader />} */}
          <input
            type="text"
            className="form-control"
            placeholder="Firm Name"
            value={firmname}
            onChange={(e) => {
              setfirmname(e.target.value);
            }}
          />

          <input
            type="text"
            className="form-control"
            placeholder="jobdescription"
            value={jobdescription}
            onChange={(e) => {
              setjobdescription(e.target.value);
            }}
          />
          {/* <input
            type="text"
            className="form-control"
            placeholder="phonenumber"
            value={phonenumber}
            onChange={(e) => {
              setphonenumber(e.target.value);
            }}
          /> */}
          <input
            type="text"
            className="form-control"
            placeholder="wagesperday"
            value={wages}
            onChange={(e) => {
              setwages(e.target.value);
            }}
          />
          <input
            type="text"
            className="form-control"
            placeholder="hoursperday"
            value={hours}
            onChange={(e) => {
              sethours(e.target.value);
            }}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="age"
            value={age}
            onChange={(e) => {
              setage(e.target.value);
            }}
          />
          <input
            type="text"
            className="form-control"
            placeholder="handicapped"
            value={handicapped}
            onChange={(e) => {
              sethandicapped(e.target.value);
            }}
          />
          <input
            type="text"
            className="form-control"
            placeholder="occupation"
            value={occupation}
            onChange={(e) => {
              setoccupation(e.target.value);
            }}
          />
          <input
            type="text"
            className="form-control"
            placeholder="gender"
            value={gender}
            onChange={(e) => {
              setgender(e.target.value);
            }}
          />
          {/* <input
            type="text"
            className="form-control"
            placeholder="aadhaarnumber"
            value={aadhaarnumber}
            onChange={(e) => {
              setaadhaarnumber(e.target.value);
            }}
          /> */}

          <div className="text-right">
            <button className="btn btn-primary mt-2" onClick={addjob}>
              Add Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddJob;
