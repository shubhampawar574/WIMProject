import React, { useState, useEffect } from "react";
import axios from "axios";
function Jobs() {
  const [jobs, setjobs] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (await axios.get("/api/jobs/getalljobs")).data;
        setjobs(data);
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
  return (
    <div className="page-heading">
      {/* <h1>Jobs</h1> */}
      <div className="row">
        <div className="col-md-12">
          <h1>Jobs</h1>
          {/* {loading && <Loader />} */}
          <div className="table-responsive">
            <table className="table table-bordered table-striped table-dark table-hover">
              <thead className="bs">
                <tr>
                  <th>Job ID</th>
                  <th>Job Name</th>
                  <th>Job Type</th>
                  <th>SalaryPerDay</th>
                  <th>HoursPerDay</th>
                  <th>Occupation</th>
                  {/* <th>Phone number</th>
                  <th>Aadhaar number</th> */}
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Handicapped</th>

                  {/* <th>Edit</th>
                  <th>Delete</th> */}
                </tr>
              </thead>
              <tbody>
                {jobs &&
                  jobs.map((job) => {
                    return (
                      <tr>
                        <td>{job._id}</td>
                        <td>{job.firmname}</td>
                        <td>{job.jobdescription}</td>
                        <td>{job.wages}</td>
                        <td>{job.hours}</td>
                        <td>{job.occupation}</td>
                        {/* <td>{job.phonenumber}</td>
                        <td>{job.aadhaarnumber}</td> */}
                        <td>{job.age}</td>
                        <td>{job.gender}</td>
                        <td>{job.handicapped}</td>
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

export default Jobs;
