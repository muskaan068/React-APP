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
      <div class="column"> </div>

      <div class="column"></div>
    </div>
  );
}
export default Myform;
