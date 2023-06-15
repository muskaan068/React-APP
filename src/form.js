import React, { useState } from "react";
import "./Form.css";
function Myform() {
  const data = { fn: "", ln: "", em: "" };
  const [inputData, setInputData] = useState(data);
  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }
  return (
    <div class="row">
      <div class="column">
        <h1 class="r" id="r1" align="center">
          REACT
        </h1>
        <br></br>
        <h1 align="center" class="r" id="r2">
          BASIC FORMS
        </h1>{" "}
        <br></br>
        <h1 align="center" class="r" id="r2">
          USING HOOKS
        </h1>
        <div class="row">
          <div class="column">
            <img
              class="i"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ></img>
          </div>
          <div class="column">
            <img
              class="i"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            ></img>
          </div>
        </div>
      </div>
      <div class="column" id="c">
        <h1 align="center" class="h">
          Registration form
        </h1>

        <form className="container">
          <div classname="f" align="center">
            <input
              class="inputbox"
              type="text"
              placeholder="First Name"
              name="fn"
              value={inputData.fn}
              onChange={handleData}
            ></input>
          </div>
          <br></br>
          <div align="center">
            <input
              class="inputbox"
              type="text"
              placeholder="Last Name"
              name="ln"
              value={inputData.ln}
              onChange={handleData}
            ></input>
          </div>
          <br></br>
          <div align="center">
            <input
              class="inputbox"
              type="email"
              placeholder="Email"
              name="em"
              value={inputData.em}
              onChange={handleData}
            ></input>
          </div>
          <br></br>
          <div align="center">
            <br></br>
            <button
              class="b"
              style={{ width: "300px", height: "50px" }}
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Myform;
