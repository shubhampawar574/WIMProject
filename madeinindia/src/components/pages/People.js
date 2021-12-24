import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function People() {
  const [employees, setemployees] = useState([]);
  const [duplicateemployees, setduplicateemployees] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();

  const [filter, setfilter] = useState({
    age: "",
    gender: "",
    employeetype: "",
    handicapped: "",
    hoursperday: "",
    salaryperday: "",
  });

  // const [searchkey, setsearchkey] = useState("");
  // const [age, setage] = useState("all");
  // const [gender, setgender] = useState("all");
  // const [employeetype, setemployeetype] = useState("all");
  // const [handicapped, sethandicapped] = useState("all");
  // const [hoursperday, sethoursperday] = useState("all");
  // const [salaryperday, setsalaryperday] = useState("all");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (await axios.get("/api/users/getallusers")).data;
        setemployees(data);
        setduplicateemployees(data);
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
        seterror(error);
      }
    }
    fetchData();
    // getAllEmployees();
  }, []);

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setfilter((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  const Submit = (event) => {
    event.preventDefault();
    console.log(event);
    alert("Form Submitted");
    let tempemployees = duplicateemployees.filter((employee) => {
      return employee.age <= parseInt(filter.age);
    });
    // setemployees(tempemployees);
    tempemployees = tempemployees.filter((employee) => {
      return employee.gender.toLowerCase() === filter.gender.toLowerCase();
    });
    tempemployees = tempemployees.filter((employee) => {
      return (
        employee.employeetype.toLowerCase() ===
        filter.employeetype.toLowerCase()
      );
    });
    tempemployees = tempemployees.filter((employee) => {
      return (
        employee.handicapped.toLowerCase() === filter.handicapped.toLowerCase()
      );
    });
    tempemployees = tempemployees.filter((employee) => {
      return employee.hoursperday <= parseInt(filter.hoursperday);
    });
    tempemployees = tempemployees.filter((employee) => {
      return employee.salaryperday <= parseInt(filter.salaryperday);
    });
    setemployees(tempemployees);
  };
  // const filterBySearch = (e) => {
  //   const tempemployees = duplicateemployees.filter((employee) => {
  //     return (
  //       employee.name.toLowerCase().includes(searchkey.toLowerCase()) ||
  //       employee.description.toLowerCase().includes(searchkey.toLowerCase())
  //     );
  //   });

  //   setemployees(tempemployees);
  // };

  // const filterByAge = (e) => {
  //   setage(e);
  //   if (e != "all") {
  //     // const tempemployees = duplicaterooms.filter((room) => {
  //     //   room.type.toLowerCase() === e.toLowerCase();
  //     // });
  // const tempemployees = duplicateemployees.filter((employee) => {
  //   return employee.age <= parseInt(e);
  // });
  // setemployees(tempemployees);
  //   } else {
  //     setemployees(duplicateemployees);
  //   }
  // };

  // const filterByGender = (e) => {
  //   setgender(e);
  //   if (e != "all") {
  //     // const tempemployees = duplicaterooms.filter((room) => {
  //     //   room.type.toLowerCase() === e.toLowerCase();
  //     // });
  // const tempemployees = duplicateemployees.filter((employee) => {
  //   return employee.gender.toLowerCase() === e.toLowerCase();
  // });
  // setemployees(tempemployees);
  //   } else {
  //     setemployees(duplicateemployees);
  //   }
  // };

  // const filterByEmployeeType = (e) => {
  //   setemployeetype(e);
  //   if (e != "all") {
  //     // const tempemployees = duplicaterooms.filter((room) => {
  //     //   room.type.toLowerCase() === e.toLowerCase();
  //     // });
  // const tempemployees = duplicateemployees.filter((employee) => {
  //   return employee.employeetype.toLowerCase() === e.toLowerCase();
  // });
  // setemployees(tempemployees);
  //   } else {
  //     setemployees(duplicateemployees);
  //   }
  // };

  // const filterByHandicapped = (e) => {
  //   sethandicapped(e);
  //   if (e != "all") {
  //     // const tempemployees = duplicaterooms.filter((room) => {
  //     //   room.type.toLowerCase() === e.toLowerCase();
  //     // });
  // const tempemployees = duplicateemployees.filter((employee) => {
  //   return employee.handicapped.toLowerCase() === e.toLowerCase();
  // });
  //     setemployees(tempemployees);
  //   } else {
  //     setemployees(duplicateemployees);
  //   }
  // };

  // const filterByHours = (e) => {
  //   sethoursperday(e);
  //   if (e != "all") {
  //     // const tempemployees = duplicaterooms.filter((room) => {
  //     //   room.type.toLowerCase() === e.toLowerCase();
  //     // });
  // const tempemployees = duplicateemployees.filter((employee) => {
  //   return employee.hoursperday <= parseInt(e);
  // });
  //     setemployees(tempemployees);
  //   } else {
  //     setemployees(duplicateemployees);
  //   }
  // };

  // const filterBySalary = (e) => {
  //   setsalaryperday(e);
  //   if (e != "all") {
  //     // const tempemployees = duplicaterooms.filter((room) => {
  //     //   room.type.toLowerCase() === e.toLowerCase();
  //     // });
  // const tempemployees = duplicateemployees.filter((employee) => {
  //   return employee.salaryperday <= parseInt(e);
  // });
  //     setemployees(tempemployees);
  //   } else {
  //     setemployees(duplicateemployees);
  //   }
  // };

  return (
    <div className="page-heading">
      {/* <h1>People</h1> */}
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-5">
            <select
              className="form-control"
              name="age"
              value={filter.age}
              onChange={inputEvent}
            >
              <option value="25">Below 25</option>
              <option value="35">Below 35</option>
              <option value="45">Below 45</option>
              <option value="55">Below 55</option>
              {/* <option value="">Duplex</option> */}
            </select>
          </div>

          <div className="col-md-5">
            <select
              className="form-control"
              name="gender"
              value={filter.gender}
              onChange={inputEvent}
            >
              <option value="Male">Male</option>
              <option value="Female">Female </option>

              {/* <option value="">Duplex</option> */}
            </select>
          </div>
          <div className="col-md-5">
            <select
              className="form-control"
              name="employeetype"
              value={filter.employeetype}
              onChange={inputEvent}
            >
              <option value="Carpenter">Carpenter</option>
              <option value="Coolie">Coolie </option>

              {/* <option value="">Duplex</option> */}
            </select>
          </div>

          <div className="col-md-5">
            <select
              className="form-control"
              name="handicapped"
              value={filter.handicapped}
              onChange={inputEvent}
            >
              <option value="Yes">Yes</option>
              <option value="No">No </option>

              {/* <option value="">Duplex</option> */}
            </select>
          </div>

          <div className="col-md-5">
            <select
              className="form-control"
              name="hoursperday"
              value={filter.hoursperday}
              onChange={inputEvent}
            >
              <option value="6">Below 6</option>
              <option value="8">Below 8 </option>
              <option value="10">Below 10</option>
              <option value="12">Below 12</option>

              {/* <option value="">Duplex</option> */}
            </select>
          </div>

          <div className="col-md-5">
            <select
              className="form-control"
              name="salaryperday"
              value={filter.salaryperday}
              onChange={inputEvent}
            >
              <option value="300">Below 300</option>
              <option value="500">Below 500 </option>
              <option value="800">Below 10</option>
              <option value="1000">Below 12</option>

              {/* <option value="">Duplex</option> */}
            </select>
          </div>

          <div className="col-md-5">
            <button type="submit" onClick={Submit}>
              Click Here
            </button>
          </div>

          <h1>Employees</h1>
          {/* {loading && <Loader />} */}
          <div className="table-responsive">
            <table className="table table-bordered table-striped table-dark table-hover">
              <thead className="bs">
                <tr>
                  <th>Employee ID</th>
                  <th>Employee Name</th>
                  <th>Employee Type</th>
                  <th>SalaryPerDay</th>
                  <th>HoursPerDay</th>
                  <th>Address</th>
                  <th>Phone number</th>
                  <th>Aadhaar number</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Handicapped</th>

                  {/* <th>Edit</th>
                  <th>Delete</th> */}
                </tr>
              </thead>
              <tbody>
                {employees &&
                  employees.map((employee) => {
                    return (
                      <tr>
                        <td>{employee._id}</td>
                        <td>{employee.ename}</td>
                        <td>{employee.employeetype}</td>
                        <td>{employee.salaryperday}</td>
                        <td>{employee.hoursperday}</td>
                        <td>{employee.address}</td>
                        <td>{employee.phonenumber}</td>
                        <td>{employee.aadhaarnumber}</td>
                        <td>{employee.age}</td>
                        <td>{employee.gender}</td>
                        <td>{employee.handicapped}</td>
                        {/* <td>
                          <Button className="btn-primary">
                            {" "}
                            <Link
                              to={`/editEmployee/${employee._id}`}
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              Edit
                            </Link>
                          </Button>
                        </td>
                        <td>
                          <Button
                            className="btn-danger"
                            onClick={() => deleteUserData(employee._id)}
                          >
                            {" "}
                            Delete
                          </Button>
                        </td> */}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default People;
