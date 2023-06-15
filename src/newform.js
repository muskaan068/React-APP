import React, { useEffect, useState } from "react";
import axios from "axios";
const NewForm = () => {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [Carbrand, setCarbrand] = useState("");
  const [Carmodel, setCarmodel] = useState("");
  const [Carmodelerror, setCarmodelError] = useState("");
  const [Carbranderror, setCarbrandError] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [useData, setuseData] = useState([]);
  const handleSubmit = async () => {
    if (fullName === "") {
      setFullNameError("Please enter the full name");
    }
    if (Carbrand === "") {
      setCarbrandError("Please select car brand");
    }
    if (Carbrand === "cb") {
      setCarbrandError("Please select car brand");
    }
    if (Carmodel === "") {
      setCarmodelError("Please select car model");
    }
    if (Carmodel === "cm") {
      setCarmodelError("Please select car model");
    }

    if (age === "") {
      setAgeError("Please enter the age");
    }
    if (
      fullName !== "" &&
      age !== "" &&
      Carbrand !== "" &&
      Carbrand !== "cb" &&
      Carmodel !== ""
    ) {
      const data = { fullName, age, Carbrand, Carmodel };
      const url = "http://localhost:8080/api/post";
      await axios
        .post(url, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const handlereset = () => {
    setFullName("");
    setFullNameError("");
    setAge("");
    setAgeError("");
    setCarbrand("");
    setCarbrandError("");
    setCarmodel("");
    setCarmodelError("");
  };
  const CallApidata = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const obj = response.data;
        console.log("response", obj);
        setuseData(obj);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <table
      border="2"
      align="center"
      bgcolor="
    #ADD8E6"
    >
      <div className="container">
        <div className="row g-2">
          <h2 style={{ color: "grey", textAlign: "center" }}> New Form</h2>
          <div className="col-6">
            <div className="p-3 ">
              <input
                type="text"
                onChange={(e) => {
                  setFullName(e.target.value);
                  setFullNameError("");
                }}
                value={fullName}
                name="fullname"
                className="form-control"
                placeholder="Full Name"
              />
              <div style={{ color: "red" }}>{fullNameError}</div>
            </div>
          </div>
          <div className="col-6">
            <div className="p-3 ">
              <input
                type="number"
                onChange={(e) => {
                  setAge(e.target.value);
                  setAgeError("");
                }}
                value={age}
                name="age"
                className="form-control"
                placeholder="Age"
              />
              <div style={{ color: "red" }}>{ageError}</div>
            </div>
          </div>
          <div className="col-6">
            <div className="p-3 ">
              <div className="form-group">
                <select
                  className="form-select form-select"
                  aria-label=".form-select-sm example"
                  onChange={(e) => {
                    setCarbrand(e.target.value);
                    setCarbrandError("");
                  }}
                  value={Carbrand}
                  name="Carbrand"
                >
                  <option defaultValue>Car Brand</option>

                  <option value="1">One</option>
                  <option value="2">hello</option>
                  <option value="3">Three</option>
                </select>
                <div style={{ color: "red" }}>{Carbranderror}</div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="p-3 ">
              <select
                className="form-select form-select"
                aria-label=".form-select-sm example"
                onChange={(e) => {
                  setCarmodel(e.target.value);
                  setCarmodelError("");
                }}
                value={Carmodel}
                name="Carmodel"
              >
                <option defaultValue>Car Model</option>
                <option value="k">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div style={{ color: "red" }}>{Carmodelerror}</div>
            </div>
          </div>
          <div className="col-6">
            <div className="p-3 ">
              <div className="col-4 mx-auto">
                <input
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-primary"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="p-3 ">
              <div className=" col-4 mx-auto">
                <input
                  type="reset"
                  onClick={handlereset}
                  className="btn btn-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </table>
  );
};
export default NewForm;
