import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Form() {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const [ename, setename] = useState("");
  const [gender, setgender] = useState();
  const [age, setage] = useState();
  const [phonenumber, setphonenumber] = useState();
  const [aadhaarnumber, setaadhaarnumber] = useState();
  const [employeetype, setemployeetype] = useState();
  const [handicapped, sethandicapped] = useState();
  const [hoursperday, sethoursperday] = useState();
  // const [email, setemail] = useState();
  const [address, setaddress] = useState();
  const [salaryperday, setsalaryperday] = useState();
  // const [imageurl1, setimageurl1] = useState();

  async function addEmployee() {
    const newemployee = {
      aadhaarnumber,
      ename,
      handicapped,
      hoursperday,
      // email,
      address,
      salaryperday,
      phonenumber,
      // imageurl1,
      age,
      employeetype,
      gender,
    };
    try {
      setloading(true);
      const result = await (
        await axios.post("api/users/adduser", newemployee)
      ).data;
      console.log(result);
      setloading(false);
      Swal.fire(
        "Congratulations",
        "Employee added successfully",
        "success"
      ).then((result) => {
        window.location.href = "/people";
      });
    } catch (error) {
      console.log(error);
      Swal.fire("Oops", "Something went wrong", "error");
    }
  }
  return (
    <div className="page-heading">
      <h1>Form</h1>
      <div className="row mb-4 w-100">
        <div className="col-md-6">
          {/* {loading && <Loader />} */}
          <input
            type="text"
            className="form-control"
            placeholder="Employee Name"
            value={ename}
            onChange={(e) => {
              setename(e.target.value);
            }}
          />

          <input
            type="text"
            className="form-control"
            placeholder="address"
            value={address}
            onChange={(e) => {
              setaddress(e.target.value);
            }}
          />
          <input
            type="text"
            className="form-control"
            placeholder="phonenumber"
            value={phonenumber}
            onChange={(e) => {
              setphonenumber(e.target.value);
            }}
          />
          <input
            type="text"
            className="form-control"
            placeholder="salaryperday"
            value={salaryperday}
            onChange={(e) => {
              setsalaryperday(e.target.value);
            }}
          />
          <input
            type="text"
            className="form-control"
            placeholder="hoursperday"
            value={hoursperday}
            onChange={(e) => {
              sethoursperday(e.target.value);
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
            placeholder="employeetype"
            value={employeetype}
            onChange={(e) => {
              setemployeetype(e.target.value);
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
          <input
            type="text"
            className="form-control"
            placeholder="aadhaarnumber"
            value={aadhaarnumber}
            onChange={(e) => {
              setaadhaarnumber(e.target.value);
            }}
          />

          <div className="text-right">
            <button className="btn btn-primary mt-2" onClick={addEmployee}>
              Add Employee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
