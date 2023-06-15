import React, { useState } from "react";
function FormInput2() {
  const [fullName, setFullName] = useState("");
  const [Address, setAddress] = useState("");
  const [age, setaAge] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [AddressError, setAddressError] = useState("");
  const [ageError, setageError] = useState("");
  const handleSubmit = () => {
    if (fullName === "") {
      setFullNameError("Please enter the full name");
    }
    if (Address === "") {
      setAddressError("Please enter the full address");
    }
    if (age === "") {
      setageError("Please enter the age");
    }
    if (fullName !== "" && Address !== "" && age !== "") {
      const data = { fullName, Address, age };
      alert(JSON.stringify(data));
    }
  };
  return (
    <div className="form-row row">
      <div className="col">
        <input
          type="text"
          onChange={(e) => {
            setFullName(e.target.value);
            setFullNameError("");
          }}
          value={fullName}
          name="fullName"
          className="form-control"
          placeholder="Full Name"
        />
        <div style={{ color: "red" }}>{fullNameError}</div>
      </div>
      <div className="col">
        <input
          type="text"
          onChange={(e) => {
            setAddress(e.target.value);
            setAddressError("");
          }}
          value={Address}
          name="Address"
          className="form-control"
          placeholder="Address"
        />
        <div style={{ color: "red" }}>{AddressError}</div>
      </div>
      <div className="col">
        <input
          type="number"
          onChange={(e) => {
            setaAge(e.target.value);
            setageError("");
          }}
          value={age}
          name="age"
          className="form-control"
          placeholder="Age"
        />
        <div style={{ color: "red" }}>{ageError}</div>
      </div>
      <div className="col">
        <input
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        />
      </div>
    </div>
  );
}
export default FormInput2;
